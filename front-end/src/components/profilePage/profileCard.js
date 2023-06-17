import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfileCard = () => {
  return (
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
        <a href="#" className="btn btn-success">Edit Profile</a>
      </div>
    </div>
  );
}

export default ProfileCard;
