import React from "react";
import * as Icons from "react-bootstrap-icons";
import { useState } from "react";
import { useSpring, animated } from "react-spring";

const CategoryButton = () => {
  const [isVisibleCategory, setIsVisibleCategory] = useState(false);

  const buttonCategoryHandler = () => {
    setIsVisibleCategory((v) => !v);
  };

  const categoryAnimation = useSpring({
    height: isVisibleCategory ? "auto" : 0,
    opacity: isVisibleCategory ? 1 : 0,
  });

  return (
    <div className="categoryCard d-flex gap-2 align-items-center">
      <button
        className={`btn ${
          isVisibleCategory ? "btn-success" : "btn-light"
        }  p-4 d-flex flex-column gap-1 align-items-center shadow-lg`}
        onClick={() => buttonCategoryHandler()}
      >
        <Icons.GridFill size={48} />
        <span>Tipe Kerusakan</span>
      </button>
      <animated.div style={categoryAnimation}>
        {isVisibleCategory ? (
          <div className="d-flex gap-3">
            <button className="btn btn-light p-4 d-flex flex-column gap-1 align-items-center categoryContent shadow">
              <Icons.TrashFill size={36} />
              <span>Sampah</span>
            </button>
            <button className="btn btn-light p-4 d-flex flex-column gap-1 align-items-center categoryContent shadow">
              <Icons.DropletHalf size={36} />
              <span>Air</span>
            </button>
            <button className="btn btn-light p-4 d-flex flex-column gap-1 align-items-center categoryContent shadow">
              <Icons.Tree size={36} />
              <span>Deforestasi</span>
            </button>
            <button className="btn btn-light p-4 d-flex flex-column gap-1 align-items-center categoryContent shadow">
              <Icons.LifePreserver size={36} />
              <span>Habitat</span>
            </button>
          </div>
        ) : (
          ""
        )}
      </animated.div>
    </div>
  );
};

export default CategoryButton;
