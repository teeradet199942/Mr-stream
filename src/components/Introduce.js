import React from "react";
import "./Introduce.css";
function Introduce() {
  return (
    <div className="container">
      <section className="content-con">
        <div className="content-l">
          <img src={`${process.env.PUBLIC_URL}/img/imgintro.jpg`} />
        </div>
        <div className="content-r">
          <h2>It’s IMPORTANT to treat your BOILER WATER, isn’t it?</h2>
          <p>
            {" "}
            Increasing levels of impurities in water cause scale to form in
            Boiler
          </p>
        </div>
      </section>
      <hr className="line-1"></hr>
      <section className="content-con">
        <div className="content-r">
          <h3>Scale</h3>
          <li>Increasing thermal resistant</li>
          <li>Less efficient(Tube overheat or rupture)</li>
          <li>Amount of money to repair</li>
        </div>
        <div className="content-r">
          <h3>Corrode</h3>
          <li>Less efficient</li>
          <li>Less efficient(Tube overheat or rupture)</li>
          <li>Degrade in quality of Boiler (Replace Boiler Sooner)</li>
        </div>
      </section>
      <div style={{ backgroundColor: "#dbdbdb", marginTop: "60px" }}>
        <section className="content-con">
          <div className="content-r">
            <h1>Welcome!</h1>
            <div className="wel-text">
              <h3>To Maintain Proper Boiler Water Treatment </h3>
              <div className="bt-lc">
                <a href="/Services" className="a-learn">
                  Learn more
                </a>
                <a href="/Contact" className="a-con">
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="con-imglogo">
        <img
          className="logo-team"
          src={`${process.env.PUBLIC_URL}/img/logo.png`}
        />
      </div>
      <hr className="line-1"></hr>
      <section className="content-con">
        <div className="content-r">
          <h3 className="text-company">MR.STREAM(222)CO.,LTD</h3>
        </div>
        <div className="box-line"></div>
        <div className="content-r">
          <h3>3/3 M.2 T.Lat Lum Kaeo, A.Lat lum Kaeo, Pathum Thani 12140</h3>
          <h3>Email : Stream.aoi@gmail.com</h3>
        </div>
      </section>
    </div>
  );
}
export default Introduce;
