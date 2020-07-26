import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

const App = () => {
    const InputsNum = [1,2,3,4,5];
    const [InputText, setInputText] = useState("Please write something...");
    const style = {padding: "10px", margin:"10px"}

    function handleChanges(event) {
        setInputText(event.target.value);
    }
;
    return (
        <div>
            {
				InputsNum.map(() => (
                    <div>
                        <input type="text" placeholder={InputText} onChange={handleChanges} style={style}/>
                    </div>
                ))
            }
        </div>
    )
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);