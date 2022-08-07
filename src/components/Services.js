import React from "react";
import "./Services.css";

function Services() {
  return (
    <div className="container">
      <p className="text-our">SERVICES</p>
      <p
        style={{
          fontSize: "1.7rem",
          backgroundColor: "#77838d",
          color: "white",
        }}
      >
        Chemicals for Boiler (B-One)
      </p>
      <section className="content-conser">
        <div className="content-l">
          <p className="text-bone">Before</p>
          <img src={`${process.env.PUBLIC_URL}/img/beforephoto.png`} />
        </div>
        <div className="content-l">
          <p className="text-bone1">After</p>
          <img src={`${process.env.PUBLIC_URL}/img/afterphoto.png`} />
        </div>
      </section>
      <p
        style={{
          fontSize: "1.7rem",
          backgroundColor: "#77838d",
          color: "white",
        }}
      >
        Chemicals for Cooling (C-One)
      </p>
      <section className="content-conser">
        <div className="content-l">
          <p className="text-bone">Before</p>
          <img src={`${process.env.PUBLIC_URL}/img/beforephoto1.png`} />
        </div>
        <div className="content-l">
          <p className="text-bone1">After</p>
          <img src={`${process.env.PUBLIC_URL}/img/afterphoto1.png`} />
        </div>
      </section>
      <section className="content-con">
        <div className="content-r">
          <h3>1.Water Treatment Chemicals</h3>
          <li>Chemicals for Boiler,Cooling+Chiller</li>
          <li>สารกรองประเภทต่างๆเช่น เรซิ่น</li>
          <h3>ข้อแตกต่างกับเคมีประเภทเดียวกัน</h3>
          <li>
            เป็น compound chemicals
            มีหน้าที่ป้องกันตะกรัน,สนิมและสลายตะกรันให้นิ่มขึ้นสามารถฉีดล้างได้ง่าย
          </li>
          <li>สะดวกในการใช้งาน</li>
          <li>ลดค่าใช่จ่ายในการซ่อมบำรุงและยืดอายุการใช้งาน</li>
          <li>ประหยัดพลังงาน</li>
        </div>
        {/* <div className="content-r"> */}

        {/* </div> */}
      </section>
      <h3>2.PM(Pre maintanance)</h3>
      <li>เปลี่ยนสารกรองต่างๆ เช่น เรซิ่น</li>
      <section className="content-con">
        <div className="content-l">
          <img src={`${process.env.PUBLIC_URL}/img/photoresin1.png`} />
        </div>
        <div className="content-l">
          <img src={`${process.env.PUBLIC_URL}/img/photoresin2.png`} />
        </div>
        <div className="content-l">
          <img src={`${process.env.PUBLIC_URL}/img/photoresin3.png`} />
        </div>
      </section>
      <li>ตรวจสอบความปลอดภัยภาชนะแรงดน</li>
      <section className="content-con">
        <div className="content-lser">
          <img src={`${process.env.PUBLIC_URL}/img/photoresin4.png`} />
        </div>
        <div className="content-lserR">
          <img src={`${process.env.PUBLIC_URL}/img/photoresin5.png`} />
        </div>
      </section>
    </div>
  );
}

export default Services;
