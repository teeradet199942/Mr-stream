import React from "react";
import "./Stockproduct.css";

function Stockproduct() {
  return (
    <>
      <p className="text-our">OUR PRODUCTS</p>
      <div lg={12} className="box-all">
        <div className="block-1">
          <p>เคมีป้องกันตะกรันและสนิม Boiler (B-ONE)</p>
        </div>
        <div className="block-1">
          <p>เคมีป้องกันสนิม Chiller (CHILLER-ONE) </p>
        </div>
        <div className="block-1">
          <p>เคมีป้องกันตะกรันและสนิม Cooling (C-ONE)</p>
        </div>
        <div className="block-1">
          <p>เคมีป้องกันตะไคร่และจุลชีพ Cooling (BIO-ONE)</p>
        </div>
        <div className="block-1">
          <p>เคมีทำความสะอาดและฆ่าเชื้อ (WIPWUP)</p>
        </div>
        <div className="block-1">
          <p>Denature Alcohol 99 % , 75 % ( Food grade)</p>
        </div>
        <div className="block-1">
          <p>สารกรอง เช่น เรซิ่น,ทราย,คาร์บอน,แมงกานีส</p>
        </div>
        <div className="block-1">
          <p>เครื่องกรองน้ำ เช่น กรองน้ำอ่อน,กรองคาร์บอน</p>
        </div>
        <div className="block-1">
          <p>บริการตรวจและวิเคราะห์น้ำเพื่อให้เหมาะกับการใช้งาน</p>
        </div>
        <div className="block-1">
          <p>บริการตรวจและยื่นเอกสารความปลอดภัยของหม้อไอน้ำ</p>
        </div>
        <div className="block-1">
          <p>บริการให้คำปรึกษาด้านระบบน้ำให้เหมาะสมกับการใช้งาน</p>
        </div>
      </div>
      <div className="container">
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
    </>
  );
}

export default Stockproduct;
