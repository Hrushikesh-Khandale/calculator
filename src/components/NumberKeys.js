import { clear } from "@testing-library/user-event/dist/clear";
import React, { useEffect, useRef, useState } from "react";

const NumberKeys = () => {
  // eslint-disable-next-line
  const inputRef = useRef(null);
  const [data, setData] = useState("");

  useEffect(()=>{inputRef.current.focus()})

const backSpace=()=>{
  setData(data.slice(0, -1))
}  

  const handleClick=(e)=>{
    setData(data.concat(e.target.value))
  }
  const clear = () => {
    setData("");
    console.log(data);
  };

  const handleResult = (e) => {
    // e.preventDefault();
    setData(eval(data).toString());
    console.log(eval(data));
  };

  return (
    <>
      <input
        type="text"
        readOnly
        ref={inputRef}
        value={data}
        style={{ height: "3pc", width: "20pc", color: "black" }}
      />
      <div
        className="btn-toolbar"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div className="btn-group me-2" role="group" aria-label="First group">
          <button
            onClick={handleClick}
            value="1"
            type="button"
            className="btn btn-primary"
          >
            1
          </button>
          <button
            onClick={handleClick}
            value="2"
            type="button"
            className="btn btn-primary"
          >
            2
          </button>
          <button
            onClick={handleClick}
            value="3"
            type="button"
            className="btn btn-primary"
          >
            3
          </button>
          <button
            onClick={handleClick}
            value="+"
            type="button"
            className="btn btn-primary"
          >
            +
          </button>
          <button onClick={clear} type="button" className="btn btn-primary">
            Clear
          </button>
        </div>
        <div className="btn-group me-2" role="group" aria-label="Second group">
          <button
            onClick={handleClick}
            value="4"
            type="button"
            className="btn btn-primary"
          >
            4
          </button>
          <button
            onClick={handleClick}
            value="5"
            type="button"
            className="btn btn-secondary"
          >
            5
          </button>
          <button
            onClick={handleClick}
            value="6"
            type="button"
            className="btn btn-secondary"
          >
            6
          </button>
          <button
            onClick={handleClick}
            value="-"
            type="button"
            className="btn btn-primary"
          >
            -
          </button>
          <button
            onClick={backSpace}
            value="-"
            type="button"
            className="btn btn-primary"
          >
            C
          </button>
        </div>
        <div className="btn-group" role="group" aria-label="Third group">
          <button
            onClick={handleClick}
            value="7"
            type="button"
            className="btn btn-primary"
          >
            7
          </button>
          <button
            onClick={handleClick}
            value="8"
            type="button"
            className="btn btn-primary"
          >
            8
          </button>
          <button
            onClick={handleClick}
            value="9"
            type="button"
            className="btn btn-primary"
          >
            9
          </button>
          <button
            onClick={handleClick}
            value="*"
            type="button"
            className="btn btn-primary"
          >
            *
          </button>
        </div>
        <div className="btn-group" role="group" aria-label="Fourth group">
          <button
            onClick={handleClick}
            value="."
            type="button"
            className="btn btn-primary"
          >
            .
          </button>
          <button
            onClick={handleClick}
            value="0"
            type="button"
            className="btn btn-primary"
          >
            0
          </button>
          <button
            onClick={handleResult}
            type="button"
            className="btn btn-primary"
          >
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default NumberKeys;
