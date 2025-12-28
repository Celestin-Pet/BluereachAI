octopus-blue-carbon/
├── ai-engine/
│   ├── data/
│   ├── models/
│   ├── preprocess.py
│   └── train_unet.py
├── blockchain/
│   ├── contracts/
│   │   └── CarbonCreditNFT.sol
│   ├── scripts/
│   │   └── deploy.js
│   └── test/
│       └── carbon.test.js
├── backend/
│   ├── main.py
│   └── oracle_service.py
├── frontend/
│   ├── components/
│   │   ├── MapView.jsx
│   │   └── WalletConnect.jsx
│   └── pages/
│       └── index.js
└── README.md


Satellite Images
      ↓
Preprocessing (NDVI, cleanup)
      ↓
Training Dataset (data/)
      ↓
AI Training (train_unet.py)
      ↓
Saved Model (models/)
      ↓
Inference (carbon estimation)
      ↓
Blockchain Update


 How Everything Connects (Final Flow)
Satellite → GEE → NDVI → AI Model
       ↓
  Carbon Score
       ↓
Smart Contract (NFT)
       ↓
Frontend Map + Chart

 things we have

 Live satellite ingestion
 AI-driven carbon calculation
 Visual map overlay
 Carbon trend analytics
 Blockchain-backed verification