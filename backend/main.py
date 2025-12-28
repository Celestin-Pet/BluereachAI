from fastapi import FastAPI
from oracle_service import update_carbon_score

app = FastAPI()

@app.get("/update/{token_id}")
def update(token_id: int):
    score = update_carbon_score(token_id)
    return {"token": token_id, "new_score": score}
