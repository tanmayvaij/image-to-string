import { useRef, useState } from "react"

const App = () => {


    const [ image, setImage ] = useState()
    const [ str, setStr ] = useState()
    const copytext = useRef()

    const imageToString = () => {
        const reader = new FileReader()
        reader.readAsDataURL(image)
        reader.onload = () => setStr(reader.result)
    }

    const copy = () => {
        copytext.current.select()
        document.execCommand("copy")
        alert("string copied")
    }

    return (
        <div>
            <div>
                <input 
                    type="file"  
                    accept="image/*"
                    onChange={(e)=>setImage(e.target.files[0])}
                />
            </div>
            <div>
                <button onClick={imageToString}>Convert</button>
            </div>
            <textarea ref={copytext} value={str} id="area" cols="70" rows="10">
            </textarea>
            <button  onClick={copy}>Copy</button>
        </div>
    )
}

export default App