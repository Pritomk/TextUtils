import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  let darkModeStyle = {
    backgroundColor: "#00004d",
    color: "white",
    borderRadius: "0.2rem",
  };

  let lightModeStyle = {
    backgroundColor: "white",
    color: "black",
    borderRadius: "0.2rem",
  };

  const handleOnTextChange = (event) => {
    setText(event.target.value);
  };

  const handleOnUpperCaseClick = () => {
    let temp = text.toUpperCase();
    setText(temp);
    props.alertHandle("Converted to uppercase", "success");
  };

  const handleOnLowerCaseClick = () => {
    let temp = text.toLowerCase();
    setText(temp);
  };

  const handleOnCamelCaseClick = () => {
    let temp = text.split(" ");
    temp.forEach((value, index, array) => {
      let t = value.charAt(0).toUpperCase();
      if (value.length > 1) {
        t += value.substring(1).toLowerCase();
      }
      array[index] = t;
    });
    setText(temp.join(" "));
  };

  return (
    <div>
      <div
        className="container"
        style={props.mode === "light" ? lightModeStyle : darkModeStyle}
      >
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="6"
            value={text}
            onChange={handleOnTextChange}
            style={props.mode === "light" ? lightModeStyle : {backgroundColor: 'grey', color: 'black'}}
          ></textarea>
        </div>

        <button
          type="button"
          className="btn btn-primary my-3 mx-2"
          onClick={handleOnUpperCaseClick}
        >
          CONVERT TO UPPERCASE
        </button>
        <button
          type="button"
          className="btn btn-primary my-3 mx-2"
          onClick={handleOnLowerCaseClick}
        >
          convert to lowercase
        </button>
        <button
          type="button"
          className="btn btn-primary my-3 mx-2"
          onClick={handleOnCamelCaseClick}
        >
          Convert To CamelCase
        </button>

        <div className="mb-3">
          Total {text.split(" ").length} words and {text.length} alphabets
        </div>

        <h2 htmlFor="previewText">Preview</h2>
        <div className="mb-3" id="previewText">
          {(text.length < 1) ? "Enter some text to preview" : text}
        </div>
      </div>
    </div>
  );
}
