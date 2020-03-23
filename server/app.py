from flask import Flask
from flask import request


from base64 import b64decode as decode


app = Flask(__name__)

@app.route("/", methods=["POST", "GET"]) 
def index():
    f = open("log,txt", "ab+")
    
    data = request.form.get("data")
    f.write(decode(data))

    f.write(b"==================\n")
    f.close()
    return "Done."

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=3000)


