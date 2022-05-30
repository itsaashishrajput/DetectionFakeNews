

from flask import Flask, escape, request, render_template
import pickle


vectorizer = pickle.load(open("vectorizer.pkl", 'rb'))

model = pickle.load(open("finalized_model.pkl", 'rb'))

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/prediction", methods=['GET', 'POST'])
def prediction():
    if request.method == "POST":
        news = request.form['news']
        predict = model.predict(vectorizer.transform([news]))[0]
        
        
        return render_template("prediction.html", prediction_text="News Headline is -> {}".format(predict))
    else:
        return render_template("prediction.html")

@app.route("/contact_us")
def contact_us():
    return render_template("contact_us.html")

@app.route("/about_us")
def about_us():
    return render_template("about_us.html")  


if __name__ == '__main__':
    app.run()