import { experience } from "../data";
import "./Experience.css";

const Exprience = () => {
  return (
    <div className="exp_content" id="experience">
      <h1 className="top_heading">My Experience</h1>
      <div className="experience_innerContainer">
      {experience.map((item) => (
          <div className="exp_content-item" key={item.company}>
            <div className="exp_content-info">
              <div className="exp_content-company--time">
              <h4 className="exp_content-company--position">{item.postion}</h4>
              <h4 className="exp_content-company--duration">{item.timeStamp}</h4>
              </div>
              <h4 className="exp_content-company--name">{item.company}</h4>
              {item.detail.map((info) => (
                <p className="exp_content-company--detail" key={info}>{info}</p>
              ))}
            </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Exprience;
