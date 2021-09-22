from datetime import time
from flask import Flask, request
from flask_cors import CORS, cross_origin
from pytube import YouTube
import time

app = Flask(__name__)
CORS(app, support_credentials=True)


@app.route("/api", methods=["GET", "POST"])
@cross_origin(supports_credentials=True)
def hello():
    link = request.args.get('url')
    
    yt = YouTube(link)
    video = {
        "info": {
            "title": yt.title,
            "author" : yt.author,
            "length": time.strftime("%H:%M:%S", time.gmtime(yt.length)),
            "views": yt.views,
            "img": yt.thumbnail_url
        },
        "audio": [],
        "sources" : []
    }
    videos = yt.streams.filter(progressive=True)
    audio= yt.streams.get_audio_only()

    video["audio"].append({
        "url": audio.url,
        "resolution": audio.resolution
    })

    for v in videos:
         video["sources"].append({
             "url":v.url,
             "resoution": v.resolution
         })
    
    return video

if __name__ == "__main__":
    app.run(debug=True)