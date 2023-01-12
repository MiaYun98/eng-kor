import { React, useState } from 'react'
import "./style.css"

export default function Home() {
    const [textInput, setTextInput] = useState("");
    const [translate, setTranslate] = useState("");

    const getSentence = () => {
        console.log(textInput)
        setTranslate("안녕")
    }
    
    return (
        <div>
            <textarea type="text" name="sentence" placeholder="Sentence you want to translate into Korean" onChange={e => setTextInput(e.target.value.trim())}></textarea>
            <button onClick={getSentence}></button>

            <p className='translate'>{translate}</p>
        </div>
    )
}