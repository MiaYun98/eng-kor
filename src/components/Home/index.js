import { React, useState } from 'react'

export default function Home() {
    const [textInput, setTextInput] = useState("");

    return (
        <div>
            <form onSubmit={getSentence}>
                <input type="text" name="sentence" placeholder="Sentence you want to translate into Korean" onChange={e => setTextInput(e.target.value.trim())}></input>
            </form>
            
            <input type="text" name="sentence" placeholder="Translated Korean will be shown here" onChange={e => setTextInput(e.target.value.trim())}></input>

        </div>
    )
}