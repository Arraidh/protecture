import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";
import * as Icons from "react-bootstrap-icons";
import Sidebar from "./sidebar";

const ToggleSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="d-flex">
      <Sidebar isOpen={isSidebarOpen} />
      <div
        className="toggle-sidebar d-flex flex-row align-items-center justify-content-center shadow-sm"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <Icons.CaretLeftFill size={28} />
        ) : (
          <Icons.CaretRightFill size={28} />
        )}
      </div>
    </div>
  );
};

export default ToggleSidebar;
