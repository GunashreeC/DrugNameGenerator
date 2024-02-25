from flask import Flask, render_template, request, redirect, url_for
import random

app = Flask(__name__)

# List of cancer drug names
drug_names = ["Avastin", "Herceptin", "Gleevec", "Rituxan", "Imbruvica"]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate():
    username = request.form.get('username')
    first_name = request.form.get('first_name')
    last_name = request.form.get('last_name')

    # Generate random drug names
    first_drug_name = random.choice(drug_names)
    last_drug_name = random.choice(drug_names)

    return render_template('result.html', username=username, first_name=first_name,
                           last_name=last_name, first_drug_name=first_drug_name,
                           last_drug_name=last_drug_name)

if __name__ == '__main__':
    app.run(debug=True)
