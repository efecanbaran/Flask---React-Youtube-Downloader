import { useState, useEffect } from 'react'
import Download from './components/Download'
import axios from 'axios'

function App() {

  const [link, setLink] = useState("")
  const [data, setData] = useState([])
  const [isLoad, setIsLoad] = useState(false)
  const [infoLoad, setInfoLoad] = useState(false)

  const sendLink = (e) => {
    e.preventDefault()
    axios.post(`http://127.0.0.1:5000/api?url=${link}`,{
      "data": link
    })
    .then(result => setData(result.data))
    .then(() => setInfoLoad(true))
    setIsLoad(true)
  }

   useEffect(() => {
     console.log(data)
     setIsLoad(false)
   }, [data]);

   function download(dataurl, filename) {
    const link = document.createElement("a");
    link.href = dataurl;
    link.download = filename;
    link.click();
  }

  return (
    <>
      <Download link={link} setLink={setLink} sendLink={sendLink} isLoad={isLoad} data={data} infoLoad={infoLoad} download={download} />
    </>
  );
}

export default App;
