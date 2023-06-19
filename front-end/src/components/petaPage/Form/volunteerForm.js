import React, { useState, useContext } from "react";
import * as Icons from "react-bootstrap-icons";
import { AuthContext } from "../../../utils/useAuth";
import Swal from "sweetalert2";

const VolunteerForm = ({ showVolunteerForm, setShowVolunteerForm, data }) => {
  console.log(showVolunteerForm);
  console.log(showVolunteerForm._id);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { userData } = useContext(AuthContext);

  const buttonHandlerClick = () => {
    setShowVolunteerForm(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8800/api/volunteer/${showVolunteerForm._id}/volunteer`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: userData,
            name,
            email,
            phoneNumber,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit volunteer form.");
      }

      const responseData = await response.json();

      // Reset form fields
      setName("");
      setEmail("");
      setPhoneNumber("");

      if (response.status === 200) {
        // Show success notification
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Volunteer form submitted successfully.",
        });

        setShowVolunteerForm(false);
      } else if (
        response.status === 400 &&
        responseData.message === "User is already a volunteer."
      ) {
        // Show error notification for existing volunteer
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "User is already a volunteer.",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }

      // Handle successful submission (e.g., display a success message)
    } catch (error) {
      console.error(error);
      // Handle error (e.g., display an error message)
    }
  };

  return (
    <div className="volunteerContainer">
      <button
        className="btn btn-light text-success d-flex gap-4 p-3"
        onClick={buttonHandlerClick}
      >
        <Icons.ArrowLeftCircleFill size={36} />
        <span className="fs-4 text-dark">Kembali</span>
      </button>

      <form className="d-flex flex-column gap-3 mt-3" onSubmit={handleSubmit}>
        <div className="formHeader">
          <h6>Anda akan menjadi relawan untuk kegiatan</h6>
          <h4>{showVolunteerForm.title}</h4>
        </div>
        <div class="form-floating  mb-3">
          <input
            type="text"
            className="form-control form-control-lg"
            id="floatingNameInput"
            placeholder="Mega-Chan"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label for="floatingInput">Nama Lengkap</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingEmail"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="number"
            className="form-control"
            id="floatingNomorHP"
            placeholder="Nomor HP"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <label for="floatingPassword">Nomor HP</label>
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          Daftar
        </button>
      </form>
    </div>
  );
};

export default VolunteerForm;
