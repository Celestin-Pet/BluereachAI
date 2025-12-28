import ee
import geemap

ee.Initialize()

def get_satellite_image(aoi):
    collection = (
        ee.ImageCollection("COPERNICUS/S2_SR")
        .filterBounds(aoi)
        .filterDate("2024-01-01", "2024-12-31")
        .filter(ee.Filter.lt("CLOUDY_PIXEL_PERCENTAGE", 10))
        .median()
    )
    return collection

def export_ndvi(aoi):
    image = get_satellite_image(aoi)
    ndvi = image.normalizedDifference(["B8", "B4"]).rename("NDVI")

    task = ee.batch.Export.image.toDrive(
        image=ndvi,
        description="ndvi_export",
        scale=10,
        region=aoi,
        fileFormat="GeoTIFF"
    )
    task.start()
