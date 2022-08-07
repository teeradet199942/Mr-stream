import React from "react";

function Gallery() {
  return (
    <div className="container">
      <p className="text-our">GALLERY</p>
      <p
        style={{
          fontSize: "1.7rem",
          backgroundColor: "#77838d",
          color: "white",
        }}
      >
        Boilerใช้เคมีB-ONE (น้ำป้อนมีค่าความกระด้างปนเปื้อนสูงใกล้เคียงน้ำดิบ)
      </p>
      <section className="content-con">
        <div className="content-l">
          <img src={`${process.env.PUBLIC_URL}/img/Picture1.jpg`} />
        </div>
        <div className="content-l">
          <img src={`${process.env.PUBLIC_URL}/img/Picture2.jpg`} />
        </div>
        <div className="content-l">
          <img src={`${process.env.PUBLIC_URL}/img/Picture3.jpg`} />
        </div>
      </section>
      <p
        style={{
          fontSize: "1.7rem",
          backgroundColor: "#77838d",
          color: "white",
        }}
      >
        Boilerใช้เคมีB-ONE
      </p>
      <section className="content-con">
        <div className="content-l">
          <p style={{color:"red",fontSize:"1.5rem"}}>ก่อนฉีดน้ำ</p>
          <img src={`${process.env.PUBLIC_URL}/img/Picture4.jpg`} />
        </div>
        <div className="content-l">
          <p style={{color:"green",fontSize:"1.5rem"}}>หลังฉีดน้ำ</p>
          <img src={`${process.env.PUBLIC_URL}/img/Picture5.jpg`} />
        </div>
      </section>
      <p
        style={{
          fontSize: "1.7rem",
          backgroundColor: "#77838d",
          color: "white",
        }}
      >
        Boilerใช้เคมีB-ONE
      </p>
      <section className="content-con">
        <div className="content-l">
          {/* <p>ก่อนฉีดน้ำ</p> */}
          <img src={`${process.env.PUBLIC_URL}/img/Picture6.jpg`} />
        </div>
        <div className="content-l">
          {/* <p>หลังฉีดน้ำ</p> */}
          <img src={`${process.env.PUBLIC_URL}/img/Picture7.jpg`} />
        </div>
      </section>
      <p
        style={{
          fontSize: "1.7rem",
          backgroundColor: "#77838d",
          color: "white",
        }}
      >
        Boilerใช้เคมีB-ONE
      </p>
      <section className="content-con">
        <div className="content-l">
          {/* <p>ก่อนฉีดน้ำ</p> */}
          <img src={`${process.env.PUBLIC_URL}/img/Picture8.jpg`} />
        </div>
        <div className="content-l">
          {/* <p>หลังฉีดน้ำ</p> */}
          <img src={`${process.env.PUBLIC_URL}/img/Picture9.jpg`} />
        </div>
      </section>
      <p
        style={{
          fontSize: "1.7rem",
          backgroundColor: "#77838d",
          color: "white",
        }}
      >
        Boilerใช้เคมีB-ONEหลังล้างด้วยเคมี
      </p>
      <section className="content-con">
        <div className="content-l">
          {/* <p>ก่อนฉีดน้ำ</p> */}
          <img src={`${process.env.PUBLIC_URL}/img/Picture10.jpg`} />
        </div>
        <div className="content-l">
          {/* <p>หลังฉีดน้ำ</p> */}
          <img src={`${process.env.PUBLIC_URL}/img/Picture11.jpg`} />
        </div>
      </section>
      <h2 style={{color:"red"}}>Boiler ใช้เคมี B-ONE ภายใต้การดูแลและคำแนะนำของบจก.มิสเตอร์สตรีม(222)</h2>
    </div>
  );
}

export default Gallery;
