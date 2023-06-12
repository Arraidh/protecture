import React, { useState } from "react";
import * as Icons from "react-bootstrap-icons";
import Sidebar from "./sidebar";
import CategoryButton from "./Button/laporCategoryButton";
import { useSpring, animated } from "react-spring";

const ToggleSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sideBarDisplayAnimation = useSpring({
    height: isSidebarOpen ? "auto" : 0,
  });

  return (
    <div className="d-flex position-absolute">
      <Sidebar isOpen={isSidebarOpen} />
      <animated.div style={sideBarDisplayAnimation}>
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
      </animated.div>
      <CategoryButton />
    </div>
  );
};

export default ToggleSidebar;
