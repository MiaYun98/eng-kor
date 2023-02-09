import React from "react";
import Home from './components/Home'

function App() {
    return (
        <div className="App">
            <header>Non-Formal English to Korean translator</header>
            {/* developing should work on the API or find API for the definition */}
            <p className="continue">Still developing</p>
            <Home/>
            <footer>Created by Sangmi Contact: sangmiyun0529@gmail.com</footer>
        </div>
    );
}



export default App;

