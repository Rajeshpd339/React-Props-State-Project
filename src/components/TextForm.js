import React, { useState } from 'react';

export default function TextForm(props) {
  // Initialize the state for the text input
  const [text, setText] = useState("Enter text here");

  // Function to handle converting the text to uppercase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  // Function to handle converting the text to lowercase
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  // Function to clear the text in the input field
  const clearTextField = () => {
    setText(''); // Clear the text by setting it to an empty string
  }

  // Function to handle the onchange event of the text input
  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1> {/* Display the heading from props */}
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label"></label> {/* Use "htmlFor" instead of "for" */}
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className='btn btn-primary MX-2' onClick={handleUpClick}>Convert to Uppercase</button> {/* Updated button label */}
      <button className='btn btn-primary' onClick={handleLowerClick}>Convert to Lowercase</button> {/* Updated button label */}
      <button className='btn btn-primary' onClick={clearTextField}>Clear TextField</button> {/* Updated button click handler */}
    </div>
    <div className='container my-3'>
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} word and {text.length} characters</p>
    <p>{0.008 *text.split(" ").length } Minutes Read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </>
  );
}
