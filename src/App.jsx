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
    }

    return (
        <div className="flex items-center justify-center flex-col min-h-[100vh]">

            <h1 className="font-medium italic text-lg m-4">Image To String Converter</h1>

            <div>
                <input 
                    className="border rounded border-gray-300 p-2 hover:cursor-pointer"
                    type="file"  
                    accept="image/*"
                    onChange={(e)=>setImage(e.target.files[0])}
                />
            </div>

            <div>
                <button onClick={imageToString} className="hover:bg-red-500 bg-red-600 text-white rounded p-2 mt-4">
                    Convert
                </button>
            </div>

            <textarea className="border-gray-300 border m-2 focus:!outline-none" ref={copytext} value={str} id="area" cols="25" rows="6"></textarea>

            <div>
                <button className="bg-blue-700 hover:bg-blue-600 text-white px-3 py-2 rounded" onClick={copy}>Copy Text</button>
            </div>

        </div>
    )
}

export default App