import React, {useState} from "react";

const InputElement = () => {
    const [text, setText] = useState("");
    console.log(text);
    return <input 
        onChange={(event)=>{setText(event.target.value)}} 
        placeholder="indroduzca su texto"/>;
};

export default InputElement;