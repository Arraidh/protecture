import Swal from "sweetalert2";
import React, { useEffect, useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AuthContext } from "../../../utils/useAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DonationValidation = ({
  donationValidate,
  setDonationValidate,
  showDonationForm,
  setShowDonationForm,
}) => {
  const { userData } = useContext(AuthContext);
  const [userDonations, setUserDonations] = useState([]);
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    Swal.fire("Donasi Diterima", "Terima Kasih!", "success");
  };
  const handleDonate = async () => {
    const donationData = {
      user: userData,
      name: donationValidate.fullName,
      amount: donationValidate.donationAmount,
      Donation: donationValidate._id,
    };

    try {
      const response = await axios.post(
        "http://localhost:8800/api/donations/648f242dcacb7f194a8f8451/donate",
        donationData
      );
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://app.sandbox.midtrans.com/snap/snap.js`;
      script.setAttribute("data-client-key", process.env.CLIENT_KEY);
      document.head.appendChild(script);
      setUserDonations(response.data);
      setTimeout(() => {
        fetchData();
      }, 2000);
    } catch (error) {
      console.error("Donation failed", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8800/api/donations/userDonations/${userDonations._id}`
      );
      setUserDonations(response.data);

      window.snap.pay(userDonations.token, {
        onSuccess: function (result) {
          alert("payment success!");
          console.log(result);
          handleClick();
          navigate("/map");
        },
        onPending: function (result) {
          /* You may add your own implementation here */
          alert("wating your payment!");
          console.log(result);
        },
        onError: function (result) {
          /* You may add your own implementation here */
          alert("payment failed!");
          console.log(result);
        },
        onClose: function () {
          /* You may add your own implementation here */
          alert("you closed the popup without finishing the payment");
        },
      });
    } catch (error) {
      console.error("Failed to fetch user donations", error);
    }
  };

  const handleCancelButtonClick = () => {
    setShowDonationForm(donationValidate);
    setDonationValidate(false);
  };

  return (
    <>
      <h1 className="text-center">Donation Validation</h1>
      <Row className="mt-4">
        <Col>
          <h4>Donation Title:</h4>
          <p>{donationValidate.title}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Donator Name:</h4>
          <p>{donationValidate.fullName}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Donator Amount:</h4>
          <p>{donationValidate.donationAmount}</p>
        </Col>
      </Row>
      <Row>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-dark btn-lg"
            onClick={handleCancelButtonClick}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-success btn-lg"
            onClick={handleDonate}
          >
            Donate
          </button>
        </div>
      </Row>
    </>
  );
};

export default DonationValidation;
