import React, { useState } from 'react';


export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");

    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleRemoveSpace = () => {
        let newText=text.replace(/\s/g,'')
        setText(newText);
        props.showAlert("Spaces Removed","success");

    }
    return (
        <>
        <div className={`container bg-${props.mode} bg-gradient my-3 mb-3`}>
            <h3 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading} </h3>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 mb-4" style={{color:'white',backgroundColor:props.mode}} onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2 mb-4" style={{color:'white',backgroundColor:props.mode}} onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2 mb-4" style={{color:'white',backgroundColor:props.mode}} onClick={handleRemoveSpace}>Remove Space</button>

        </div>
        <div className= {` container my-3 text-${props.mode==='light'?'dark':'light'}`}>
            <h1>Your text Summary</h1>
            <p>{text.split(' ').length-1} words and {text.length} characters</p>
            <p>{0.008*(text.split(' ').length-1)} minutes read</p>
            <h2>Preview</h2>
            <p>{text===''?'You will see what you enter...':text}</p>
        </div>
        </>
    )
}
