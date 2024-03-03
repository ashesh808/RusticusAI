import PyPDF2
import os
from Interfaces.IParser import IParser

class PdfParser(IParser):
    def __init__(self, pdf_path, file_name):
        self.pdf_path = os.path.join(pdf_path,file_name + '.pdf')

    def parse(self):
        text = ""
        try:
            with open(self.pdf_path, "rb") as file:
                pdf_reader = PyPDF2.PdfReader(file)
                for page_number in range(len(pdf_reader.pages)):
                    page = pdf_reader.pages[page_number]
                    text += page.extract_text()
        except Exception as e:
            print(f"An error occurred: {str(e)}")
        lines = text.splitlines()
        cleaned_text = ' '.join(lines)
        return cleaned_text