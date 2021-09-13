import React,{useState} from 'react'

export default function TextForm (props) {

    const handleUpClick = () => {
        // console.log('Upperase was clicked'+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Text converted to Uppercase','success')
    }

    const handleOnChange = (event) => {
        // console.log('On Change');
        setText(event.target.value);
       

    }

    const handleDownClick = () => {
        // console.log('LowerCase was clicked'+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Text converted to Lowercase','success')
    }

    const handleClClick = () => {
        let newText = " ";
        if(newText === " ")
        setText(""); 
        props.showAlert('Text Cleared','success')
    }

    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select(); 
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text.value); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState('');

        return (
            <>
            <div style={{border:props.mode === 'dark'?'2px solid grey':'2px solid red'}}>
                <div className='container ab' style={{color: props.mode === 'dark'?'white':'black'}}>
                    <h1>{props.heading}</h1>
                    <div className="mb-3" >
                        <textarea className="form-control" value={text} onChange={handleOnChange} style={{background: props.mode === 'dark'?'#060947':'white',color:props.mode === 'dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"/>
                    </div> 
                    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
                    <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear Text</button>
                    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
                </div>
                <div className='container my-2' style={{color: props.mode === 'dark'?'white':'black'}}>
                    <h3>Your Text Summary</h3>
                    <p>{text?text.split(" ").length:0} Words, {text.length} Characters</p>
                    <p>{0.008 *  text.split(" ").length} Minutes read</p>
                </div>
                <div className='container my-2' style={{color: props.mode === 'dark'?'white':'black'}}>
                    <h3>Preview</h3>
                    <p>{text.length>0?text:'Nothing to preview'}</p>
                </div>
            </div>
            </>
        )
}
