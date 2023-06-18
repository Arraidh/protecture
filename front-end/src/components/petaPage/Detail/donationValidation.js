import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AuthContext } from "../../../utils/useAuth";

const DonationValidation = (
  donationValidate,
  setDonationValidate,
  showDonationForm,
  setShowDonationForm
) => {
  const { userData } = useContext(AuthContext);
  const data = donationValidate.donationValidate;
  const handleDonate = () => {
    window.snap.pay("TRANSACTION_TOKEN_HERE");
  };

  console.log(userData);

  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = `https://app.sandbox.midtrans.com/snap/snap.js`;
  script.setAttribute("data-client-key", process.env.CLIENT_KEY);

  console.log(data);
  return (
    <>
      <h1 className="text-center">Donation Validation</h1>
      <Row className="mt-4">
        <Col>
          <h4>Donation Title:</h4>
          <p>{data.title}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Donator Name:</h4>
          <p>{data.fullName}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Donator Amount:</h4>
          <p>{data.donationAmount}</p>
        </Col>
      </Row>
      <Row>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-dark btn-lg">
            Cancel
          </button>
          <button
            type="button"
            class="btn btn-success btn-lg"
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
