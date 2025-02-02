from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/project/<int:project_id>')
def project_page(project_id):
    return render_template('project.html', project_id=project_id)

if __name__ == '__main__':
    app.run(debug=True)
