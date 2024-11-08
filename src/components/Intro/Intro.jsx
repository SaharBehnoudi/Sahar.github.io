import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    console.log(textRef);
    if (textRef.current) {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed: 60,

        strings: ["Front end", "Developer"],
      });
    }
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="a">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Sahar Behnoudi</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
          <a href="#portfolio">
            <img src="assest/down.png" alt="down" />
          </a>
        </div>
      </div>
      <div className="b">
        <div className="imageContainer">
          <img src="assest/Sahar.png" alt="sahar" />
        </div>
      </div>
    </div>
  );
}
