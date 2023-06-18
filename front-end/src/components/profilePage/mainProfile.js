import React from "react";
import ProfileCard from "./profileCard";
import LaporanCard from "../petaPage/Card/laporanCard";
import VolunteerCard from "../petaPage/Card/volunteerCard";
import DonationCard from "../petaPage/Card/donationCard";
import { Border } from "react-bootstrap-icons";

const MainProfile = () => {
  return (
    <>
      <h2 className="profile_page" style={{ margin: "20px 20px 20px 100px" }}>
        Hello Nanda Ganteng
      </h2>
      <div
        className="profile_container"
        style={{
          width: "900px",
          marginLeft: "100px",
          border: "2px solid rgba(0, 0, 0, 0.2)",
          padding: "15px",
          borderRadius: "20px",
        }}
      >
        <ProfileCard />
        <h4 className="laporan_title" style={{ margin: "20px 20px 20px 0px" }}>
          Laporan Yang Pernah Ditambahkan :
        </h4>
        <div className="row">
          <div className="col">{/* <LaporanCard /> */}</div>
          <div className="col">{/* <LaporanCard /> */}</div>
        </div>

        <h4
          className="volunteer_status"
          style={{ margin: "20px 20px 20px 0px" }}
        >
          Relawan pada kerusakan :
        </h4>
        <div className="row">
          <div className="col">{/* <VolunteerCard /> */}</div>
          <div className="col">{/* <VolunteerCard /> */}</div>
        </div>

        <h4
          className="volunteer_status"
          style={{ margin: "20px 20px 20px 0px" }}
        >
          Melakukan Donasi Pada :
        </h4>
        <div className="row">
          <div className="col">{/* <DonationCard /> */}</div>
          <div className="col">{/* <DonationCard /> */}</div>
        </div>
      </div>
    </>
  );
};

export default MainProfile;
