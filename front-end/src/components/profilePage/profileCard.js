import React from 'react';
import * as Icons from "react-bootstrap-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import EditProfileForm from './editProfileForm';
import LaporanCard from '../petaPage/Card/laporanCard';
import VolunteerCard from "../petaPage/Card/volunteerCard";
import DonationCard from "../petaPage/Card/donationCard";
import { Border } from "react-bootstrap-icons";
import { Link } from 'react-router-dom';

const ProfileCard = ( { showEditProfile, setShowEditProfileForm, data} ) => {
  const buttonHandlerClick = () => {
    setShowEditProfileForm(true);
  };
  return (
    <>
      <h2 className="profile_page" style={{ margin: '20px 20px 20px 100px' }}>Hello Nanda Ganteng</h2>
      <div className="profile_container" style={{ width: '900px', marginLeft: '100px', border: '2px solid rgba(0, 0, 0, 0.2)', padding: '15px', borderRadius: '20px' }}>
      <div className="profile-card" style={{ width: '900px', marginBottom: '50px' }}>
      <div className="row align-items-center">
        <div className="col-auto">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" className="card-img-top img-fluid rounded-circle" style={{ width: '100px', height: '100px' }} alt="Profile Picture" />
        </div>
        <div className="col">
          <div className="main-profile-info">
            <h5 className="username" >Gusti Nanda</h5>
            <p className="user-email" >gustinanda1708@gmail.com</p>
          </div>
        </div>
        <div className="col">
          <div className="main-profile-info">
            <p className="user-address bg-success" style={{ color: 'white', display: 'inline-block', padding: '5px 10px 5px 10px', borderRadius: '5px' }}>Domisili : Padang</p>
          </div>
        </div>
      </div>
      <div className="card-body">
      <Link to="/editProfileForm" className="btn btn-success gap-2 d-flex align-items-center" style={{ display: 'inline', width: '150px'}}>
        {" "}
        <Icons.PencilSquare />
         Edit Profil
      </Link>
      </div>

    </div>
        <h4 className="laporan_title" style={{ margin: '20px 20px 20px 0px' }}>Laporan Yang Pernah Ditambahkan :</h4>
        {/* <div className="row overflow-x-auto">
          <div className="col">
            <LaporanCard />
          </div>
          <div className="col">
            <LaporanCard />
          </div>
          
        </div> */}

        <h4 className="volunteer_status" style={{ margin: '20px 20px 20px 0px' }}>Relawan pada kerusakan :</h4>
        {/* <div className="row">
          <div className="col">
            <VolunteerCard />
          </div>
          <div className="col">
            <VolunteerCard />
          </div>
        </div> */}

        <h4 className="volunteer_status" style={{ margin: '20px 20px 20px 0px' }}>Melakukan Donasi Pada :</h4>
        {/* <div className="row">
          <div className="col">
            <DonationCard />
          </div>
          <div className="col">
            <DonationCard />
          </div>
        </div> */}

      </div>
    </>
  );
};

export default ProfileCard;
