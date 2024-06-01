import "./Landing.css";
import img from "../../assets/LandingPage_img.png";
import dot from "../../assets/Dot.svg";
import rect from "../../assets/Rectangle.svg";
import ellipse from "../../assets/Ellipse.svg";
function Landing() {
  return (
    <section id="landing">
      <div className="Container">
        <div className="text">
          <h1 className="title">FrameWork</h1>
          <h2 className="subtitle">Studios</h2>
          <p>Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</p>
          <button className="btn-12">
            <span>Button</span>
          </button>
        </div>
        <img src={img} className="imgs" alt="front_page_img" />
        <img src={rect} className="rect" alt="front_page_img" />
        <img src={ellipse} className="elli" alt="front_page_img" />
      </div>

      <img src={dot} className="dot" alt="front_page_img" />
      <img src={dot} className="dot2" alt="front_page_img" />
    </section>
  );
}

export default Landing;
