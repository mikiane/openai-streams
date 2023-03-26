# -*- coding: utf-8 -*-
import generatechatcompletion


from flask import Flask, Response, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Activez les CORS pour l'application Flask


@app.route('/stream_chat', methods=['POST'])
def stream_chat():
    consigne = request.form.get('consigne')
    texte = request.form.get('texte')
    return Response(generatechatcompletion.generate_chat_completion(consigne, texte), content_type='text/event-stream')

if __name__ == '__main__':
    app.run(debug=True)
    app.run(threaded=True, port=5000)



