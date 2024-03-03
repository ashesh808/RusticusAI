from flask import Flask, request, jsonify
from flask_cors import CORS
from Modules.file_uploader import FileUploader

import os

app = Flask(__name__)
CORS(app)

dirName = os.path.dirname(__file__)
UPLOAD_FOLDER = os.path.join(dirName, 'modules', 'data')
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
file_uploader = FileUploader(app)


@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'})
    result = file_uploader.upload(file)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)