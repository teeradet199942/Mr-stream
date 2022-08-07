import "./Contact.css";
import React from "react";

function Contact() {
  return (
    <div>
      <p className="text-our">GET IN TOUCH</p>

      <div className="container-1">
        {" "}
        <section className="content-con">
          <div className="content-contac">
            <img src={`${process.env.PUBLIC_URL}/img/location.png`} />
            <p style={{textAlign:"center",fontSize:"1.3rem"}}>MR.STREAM(222)CO.,LTD</p>
            <p style={{textAlign:"center",fontSize:"1.3rem"}}>3/3 M.2 T.Lat Lum Kaeo,A.Lat lum Kaeo, </p>
            <p style={{marginLeft:"13.2%",fontSize:"1.3rem"}}> Pathum Thani 12140</p>
          </div>
          <div className="content-contac">
            <img src={`${process.env.PUBLIC_URL}/img/telephone-call.png`} />
            <p style={{textAlign:"center",fontSize:"1.3rem"}}>TEL: 081-9114733</p>
            <p style={{textAlign:"center",fontSize:"1.3rem"}}>FAX: 02-1507833</p>
          </div>
          <div className="content-contac">
            <img src={`${process.env.PUBLIC_URL}/img/email_3.png`} />
            <p style={{textAlign:"center",fontSize:"1.3rem"}}>EMAIL: Stream.aoi@gmail.com</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
