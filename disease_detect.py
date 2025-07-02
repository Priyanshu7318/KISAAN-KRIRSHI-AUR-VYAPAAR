
from fastapi import FastAPI, UploadFile, File # create server and upload file handle file
from transformers import pipeline # hugging face image classification pipeline is type of connection
from PIL import Image #python image lib
import io
from fastapi.middleware.cors import CORSMiddleware #port number connection

app = FastAPI()

origins = [
    "http://localhost:3000",  # React, Next.js (Development)
    "http://localhost:5173",
    "http://127.0.0.1:5500/diseasedetect.html"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow specific origins
    allow_credentials=True,  # Allow cookies to be included
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],  # Allow all headers
)


classifier = pipeline("image-classification", model="linkanjarad/mobilenet_v2_1.0_224-plant-disease-identification")     
@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    """Endpoint to predict plant disease from an uploaded image."""
    contents = await file.read()
    image = Image.open(io.BytesIO(contents))
    image = image.convert("RGB")
    # Run prediction using Hugging Face model
    predictions = classifier(image)

    # Extract the top result
    result = predictions[0]  # Get the top prediction
    predicted_class = result["label"]
    confidence = round(result["score"] * 100, 2)

    return {"prediction": predicted_class, "confidence": f"{confidence}%"}

# Run server using: uvicorn filename:app --reload
