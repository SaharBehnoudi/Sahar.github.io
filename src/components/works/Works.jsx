import { useEffect, useState } from "react";
import WorkList from "../workslist/WorkList";
import "./works.scss";
import { weMobileApp, webSiteDesign } from "../../data";

export default function Works() {
  const [selected, setSelected] = useState("websites");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "websites",
      title: "Website",
    },
    {
      id: "mobile",
      title: "Mobile app",
    },
  ];
  useEffect(() => {
    switch (selected) {
      case "websites":
        setData(webSiteDesign);
        break;
      case "mobile":
        setData(weMobileApp);
        break;

      default:
        setData(webSiteDesign);
    }
  }, [selected]);
  return (
    <div className="works" id="works">
      <h1></h1>
      <ul>
        {list.map((item) => (
          <WorkList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d)=> (<div className="item">
          <img src= {d.img} alt="" />
          <h3>{d.title} </h3>
        </div>))
        
        }
        
        
      </div>
    </div>
  );
}
