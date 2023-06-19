import React from "react";
import ProfileCard from "./profileCard";
import LaporanCard from "../petaPage/Card/laporanCard";
import VolunteerCard from "../petaPage/Card/volunteerCard";
import DonationCard from "../petaPage/Card/donationCard";
import { Border } from "react-bootstrap-icons";
import { AuthProvider } from "../../utils/useAuth";

const MainProfile = () => {
  return (
    <>
      <AuthProvider>
        <ProfileCard />
      </AuthProvider>
    </>
  );
};

export default MainProfile;
