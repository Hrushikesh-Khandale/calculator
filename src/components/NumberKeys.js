import React, { useEffect, useRef, useState } from "react";

const NumberKeys = () => {
  const inputRef = useRef(null);
  const [data, setData] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  });

  const backSpace = () => {
    setData(data.slice(0, -1));
  };

  const handleClick = (e) => {
    setData(data.concat(e.target.value));
  };

  const clear = () => {
    setData("");
    console.log(data);
  };

  const handleResult = (e) => {
    // eslint-disable-next-line
    setData(eval(data).toString());
    // eslint-disable-next-line
    console.log(eval(data));
    // e.preventDefault();
  };

  return (
    <div className="container" style={{border:'2px solid black',borderRadius:'10px',paddingTop:'40px',height:'22pc',width:'25pc',marginLeft:'40%',background:'#ff7979' }}>
      <input
        type="text"
        readOnly
        ref={inputRef}
        value={data}
        style={{
          height: "3pc",
          width: "20pc",
          background: "white",
          color: "black",
          marginBottom: "1pc",
          fontSize: "1.5rem",
          fontFamily: "Consolas",
          border:'10px groove smokewhite'
        }}
      />
      <div
        className="btn-toolbar"
        id="buttons"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div className="btn-group me-2" role="group" aria-label="First group">
          <button
            style={{
              height: "3pc",
              width: "3pc",
              margin: " 5px 11px",
              background: "#ff3e3e",
              color: "white",
              fontSize: "1rem",
            }}
            onClick={handleClick}
            value="1"
            type="button"
            className="btn btn-primary"
          >
            1
          </button>
          <button
            style={{
              height: "3pc",
              width: "3pc",
              margin: " 5px 11px",
              background: "#ff3e3e",
              color: "white",
              fontSize: "1rem",
            }}
            onClick={handleClick}
            value="2"
            type="button"
            className="btn btn-primary"
          >
            2
          </button>
          <button
            style={{
              height: "3pc",
              width: "3pc",
              margin: " 5px 11px",
              background: "#ff3e3e",
              color: "white",
              fontSize: "1rem",
            }}
            onClick={handleClick}
            value="3"
            type="button"
            className="btn btn-primary"
          >
            3
          </button>
          <button
            style={{
              height: "3pc",
              width: "3pc",
              margin: " 5px 11px",
              background: "#ff3e3e",
              color: "white",
              fontSize: "1rem",
            }}
            onClick={handleClick}
            value="+"
            type="button"
            className="btn btn-primary"
          >
            +
          </button>
          <button
            style={{
              height: "3pc",
              width: "3pc",
              margin: " 5px 11px",
              background: "#ff3e3e",
              color: "white",
              fontSize: "1rem",
            }}
            onClick={clear}
            type="button"
            className="btn btn-primary"
          >
            Clear
          </button>
        </div>
        <div className="btn-group me-2" role="group" aria-label="Second group">
          <button
            style={{
              height: "3pc",
              width: "3pc",
              margin: " 5px 11px",
              background: "#ff3e3e",
              color: "white",
              fontSize: "1rem",
            }}
            onClick={handleClick}
            value="4"
            type="button"
            className="btn btn-primary"
          >
            4
          </button>
          <button
            style={{
              height: "3pc",
              width: "3pc",
              margin: " 5px 11px",
              background: "#ff3e3e",
              color: "white",
              fontSize: "1rem",
            }}
            onClick={handleClick}
            value="5"
            type="button"
            className="btn btn-secondary"
          >
            5
          </button>
          <button
            style={{
              height: "3pc",
              width: "3pc",
              margin: " 5px 11px",
              background: "#ff3e3e",
              color: "white",
              fontSize: "1rem",
            }}
            onClick={handleClick}
            value="6"
            type="button"
            className="btn btn-secondary"
          >
            6
          </button>
          <button
            style={{
              height: "3pc",
              width: "3pc",
              margin: " 5px 11px",
              background: "#ff3e3e",
              color: "white",
              fontSize: "1rem",
            }}
            onClick={handleClick}
            value="-"
            type="button"
            className="btn btn-primary"
          >
            -
          </button>
          <button
            style={{
              height: "3pc",
              width: "3pc",
              margin: " 5px 11px",
              background: "#ff3e3e",
              color: "white",
              fontSize: "1rem",
            }}
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
            style={{
              height: "3pc",
              width: "3pc",
              margin: " 5px 11px",
              background: "#ff3e3e",
              color: "white",
              fontSize: "1rem",
            }}
            onClick={handleClick}
            value="7"
            type="button"
            className="btn btn-primary"
          >
            7
          </button>
          <button
            style={{
              height: "3pc",
              width: "3pc",
              margin: " 5px 11px",
              background: "#ff3e3e",
              color: "white",
              fontSize: "1rem",
            }}
            onClick={handleClick}
            value="8"
            type="button"
            className="btn btn-primary"
          >
            8
          </button>
          <button
            style={{
              height: "3pc",
              width: "3pc",
              margin: " 5px 11px",
              background: "#ff3e3e",
              color: "white",
              fontSize: "1rem",
            }}
            onClick={handleClick}
            value="9"
            type="button"
            className="btn btn-primary"
          >
            9
          </button>
          <button
            style={{
              height: "3pc",
              width: "3pc",
              margin: " 5px 11px",
              background: "#ff3e3e",
              color: "white",
              fontSize: "1rem",
            }}
            onClick={handleClick}
            value="*"
            type="button"
            className="btn btn-primary"
          >
            *
          </button>
          <button
            style={{
              height: "3pc",
              width: "3pc",
              margin: " 5px 11px",
              background: "#ff3e3e",
              color: "white",
              fontSize: "1rem",
            }}
            onClick={handleClick}
            value="/"
            type="button"
            className="btn btn-primary"
          >
            /
          </button>
        </div>
        <div className="btn-group" role="group" aria-label="Fourth group">
          <button
            style={{
              height: "3pc",
              width: "3pc",
              margin: " 5px 11px",
              background: "#ff3e3e",
              color: "white",
              fontSize: "1rem",
            }}
            onClick={handleClick}
            value="."
            type="button"
            className="btn btn-primary"
          >
            .
          </button>
          <button
            style={{
              height: "3pc",
              width: "3pc",
              margin: " 5px 11px",
              background: "#ff3e3e",
              color: "white",
              fontSize: "1rem",
            }}
            onClick={handleClick}
            value="0"
            type="button"
            className="btn btn-primary"
          >
            0
          </button>
          <button
            style={{
              height: "3pc",
              width: "11.8pc",
              margin: " 5px 11px",
              background: "#bf1f1f",
              fontSize: "1rem",
            }}
            onClick={handleResult}
            type="button"
            className="btn btn-primary"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default NumberKeys;
