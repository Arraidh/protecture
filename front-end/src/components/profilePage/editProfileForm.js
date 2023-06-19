import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icons from "react-bootstrap-icons";
import { Link } from 'react-router-dom';

const EditProfileForm = ({ }) => {
  // const buttonHandlerClick = () => {
  //   setShowEditProfileForm(false);
  // };

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code here to handle form submission
  };

  const handleDeleteAccount = () => {
    // Add code here to handle account deletion
  };

  return (
    <>
      <h2 className="edit-profile" style={{ margin: '20px 20px 20px 100px' }}>Edit Profile</h2>
      <div className="edit-profile-form" style={{ width: '900px', marginLeft: '100px', marginBottom: '100px', border: '2px solid rgba(0, 0, 0, 0.2)', padding: '15px', borderRadius: '20px' }}>
        <Link to="/profile" className="btn btn-light text-success d-flex gap-4 p-3">
          <Icons.ArrowLeftCircleFill size={36} />
          <span style={{ fontSize: '24px' }}>Kembali</span>
        </Link>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Domisili</label>
            <input
              type="text"
              className="form-control"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="oldPassword" className="form-label">Password Lama</label>
            <input
              type="password"
              className="form-control"
              id="oldPassword"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="newPassword" className="form-label">Password Baru</label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)} />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-success  me-3">Simpan Perubahan</button>
            <button type="button" className="btn btn-danger" onClick={handleDeleteAccount}>Hapus Akun</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditProfileForm;
