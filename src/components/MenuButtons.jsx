import React from "react";

const MenuButtons = ({ uniqueCategory, setSelectedCategory }) => {
  const handleClick = (category) => {
    setSelectedCategory(category);
  };
  return uniqueCategory.map((x) => {
    return (
      <button onClick={() => handleClick(x)} key={x}>
        {x}
      </button>
    );
  });
};

export default MenuButtons;
