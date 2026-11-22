from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

profile = {
    "heroTitle": "About me",
    "heroSubtitle": "I am a software engineer with a passion for building web applications and exploring new technologies. I have experience in both frontend and backend development, and I enjoy working on projects that challenge me to learn and grow as a developer."
}

class AnalyzeRequest(BaseModel):
    text: str

@app.get("/api/profile")
def get_profile():
    return profile

@app.post("/api/analyze")
def analyze_text(request: AnalyzeRequest):
    # Here you would add your text analysis logic
    return {"message": "Text analyzed successfully", "data": request.text}