import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";

function App() {
  let logoItem = useRef(null);
  let textItem = useRef(null);

  console.log(logoItem);

  useEffect(() => {
    console.log(logoItem);
    // logoItem.style.display = "none";
    TweenMax.to(logoItem, 2, {
      opacity: 1,
      y: -50,
      ease: Power3.easeOut
    });
    TweenMax.to(textItem, 4, {
      opacity: 1,
      y: -50,
      ease: Power3.easeOut,
      delay: 0.2
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img
          ref={el => {
            logoItem = el;
          }}
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <p
          ref={el => {
            textItem = el;
          }}
        >
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
