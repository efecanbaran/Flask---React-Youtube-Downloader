const Download = ({ link, setLink, sendLink, isLoad, data, infoLoad }) => {

    return (
        <>
            <div className="container">
                <h1 className="header">Youtube Downloader</h1>
                <div className="youtube">
                    <form onSubmit={sendLink}>
                        <input name="link1" value={link} id="url" onChange={(e) => setLink(e.target.value)} type="text" placeholder="Enter a link" />
                        <input type="submit" id="download-btn" value="Download" onClick={() => sendLink} />
                    </form>

                </div>
                <div className="loading" style={{ display: isLoad ? "flex" : "none" }}>
                    <div></div>
                </div>
                {
                    infoLoad ?
                        <div className="info-container" style={{ display: infoLoad ? "flex" : "none" }}>
                            <div className="info">
                                <img src={data.info.img} alt="thumbnail" />
                                <ul>
                                    <li><b>Title:</b> {data.info.title}</li>
                                    <li><b>Author:</b> {data.info.author}</li>
                                    <li><b>Length:</b> {data.info.length}</li>
                                    <li><b>Views:</b> {data.info.views}</li>
                                </ul>
                            </div>

                            <div className="resolotions">
                                <div>
                                    <h4>Please choose formatting</h4>
                                    <ul>
                                        <li>
                                            <a href={data.audio[0].url} target="_blank" rel="noreferrer">MP3</a>
                                        </li>
                                        {
                                            data.sources.map((video, index) => (
                                                <span key={index}>
                                                    <li>
                                                        <a href={video.url} target="_blank" rel="noreferrer">{video.resoution}</a>
                                                    </li>
                                                </span>

                                            ))
                                        }
                                    </ul>

                                </div>
                            </div>

                        </div>
                        : <span></span>

                }

            </div>

        </>
    )
}

export default Download