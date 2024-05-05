import React, { useState } from 'react'

export default function Textform(props) {

  
  const [text, setText] = useState('');
  // text = "new text"; //wrong way to change the text
  // setText("new text"); //right way to change the text

  const handleUpClick = () => {
    // console.log("Uppercase was clicked", text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success");
  }
  const handleLowClick = () => {
    // console.log("Uppercase was clicked", text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  }

  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared text", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Handled", "success");
  }

  const handleCopy = () => {
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied", "success");
  }

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value) //by using this we can write the value in textarea
  }

  return (
    <>
      {/* <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mbr">
          <textarea name="textarea" id='myBox' className='textarea' cols="100" rows="10" value={text} onChange={handleOnChange} placeholder='Enter your text here'></textarea>
        </div>*/}
        {/* <div>
          <button className="btn" onClick={handleUpClick}>Upper case</button>
          <button className="btn" onClick={handleLowClick}>Lower case</button>
          <button className="btn" onClick={handleClear}>Clear Text</button>
          <button className="btn" onClick={handleCopy}>Copy Text</button>
          <button className="btn" onClick={handleExtraSpaces}>Clear Extra Spaces</button>
        </div> */}
      {/* </div>  */}
      <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1 style={{color: props.mode === 'light' ? 'black' : 'white'}}>{props.heading}</h1>
        <div className="mb-3">
          <textarea  id="myBox" className='form-control' rows="10" value={text} onChange={handleOnChange} placeholder='Enter your text here' style={{backgroundColor: props.mode === 'dark' ? 'rgba(var(--bs-dark-rgb))' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}></textarea>
        </div>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Upper case</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Lower case</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Clear Extra Spaces</button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>Text Summary: </h1>
        <p>Words: {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
        <p>Characters: {text.length}</p>
        <p>Time taken to read: {0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length}minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter the text to preview it "}</p>
      </div>
    </>
  )
}
