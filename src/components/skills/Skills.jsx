import "./skills.scss";

import { useState } from "react";

export default function Skills() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "0",
      title: "HTML",
      img: "assest/html.png",
    },

    {
      id: "1",
      title: "CSS",
      img: "assest/CSS-Logo.png",
    },
    {
      id: "2",
      title: "JavaScript",
      img: "assest/js.png",
    },
    {
      id: "3",
      title: "React",
      img: "assest/react.png",
    },
    {
      id: "4",
      title: "TypeScript",
      img: "assest/typescript.png",
    },
    {
      id: "5",
      title: "NextJS",
      img: "assest/nextjs.png",
    },
  ];
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="skills" id="skills">
      <div className="text"><h2>MY SKILLS</h2></div>
      
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="top">
                <div className="topContainer">
                  <img src={d.img} alt="html" />
                </div>
              </div>
              <div className="bottom">
                <div className="bottomContainer">
                  <h2>{d.title} </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assest/arrow-r.png"
        className="arrow left"
        alt="left"
        onClick={() => handleClick("left")}
      />
      <img
        src="assest/arrow-r.png"
        className="arrow right"
        alt="right"
        onClick={() => handleClick()}
      />
    </div>
  );
}
