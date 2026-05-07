import sys
from pypdf import PdfReader

def extract_text(pdf_path):
    reader = PdfReader(pdf_path)
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    print(text)

if __name__ == "__main__":
    extract_text("CV_Luca_Cardozo_IT.pdf")
