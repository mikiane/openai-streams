
import openai
import os
from dotenv import load_dotenv

# Charger les variables d'environnement du fichier .env
load_dotenv()

openai.api_key = os.environ['OPEN_AI_KEY']

def generate_chat_completion(consigne, texte):
    prompt = str(consigne + " : " + texte)
    response = openai.ChatCompletion.create(
        model='gpt-4-0314',
        messages=[
            {'role': 'system', 'content': "Je suis un assistant parlant parfaitement le français et l'anglais capable de corriger, rédiger, paraphraser, traduire, résumer, développer des textes. "},
            {'role': 'user', 'content': prompt }
        ],
        temperature=0,
        stream=True
    )

    for chunk in response:
        if 'delta' in chunk['choices'][0] and 'content' in chunk['choices'][0]['delta']:
            content = chunk['choices'][0]['delta']['content']
            yield f"{content}"
