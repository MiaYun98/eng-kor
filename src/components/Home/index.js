import { React, useState } from 'react'
import "./style.css"

export default function Home() {
    const [textInput, setTextInput] = useState("");
    const [translate, setTranslate] = useState("");

    const getSentence = () => {
        console.log(textInput)
        const wordByword = textInput.split(" ")
        console.log(wordByword);

        // question sentence or not should go first and than if there is no wh start word goes with the normal stence structure

        // according to the word order 
        if(wordByword.length === 3) {
            svoOrder(wordByword)
        }
    }

    const svoOrder = (sentence) => {
        let subject = sentence[0];
        let verb = sentence[1];
        let object = sentence[2]

        // this is going to be a data base 
        let korSub = "나"
        let korVerb = "사랑해"
        let korObj = "너"

        setTranslate(korSub + " " + korObj + " " + korVerb)
    }

    return (
        <div className='home'>
            <div className='content'>
                <div className='box'>
                    <textarea type="text" name="sentence" placeholder="Sentence you want to translate into Korean" onChange={e => setTextInput(e.target.value.trim())}></textarea>
                </div>
                <div className='box'>
                    <p className='translate'>{translate}</p>
                </div>

            </div>
            <div className='buttonDiv'>
                <button onClick={getSentence}>submit</button>
            </div>
        </div>
    )
}