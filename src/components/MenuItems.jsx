import React from "react";
import data from "../data";
import MenuItem from "./MenuItem";

const MenuItems = ({ selectedCategory }) => {
  const filteredMenu = data.filter((item) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === item.category) return true;
    return false;
  });

  return filteredMenu.map((item) => {
    return <MenuItem {...item} key={item.id} />;
  });
};

export default MenuItems;

//   img, desc, title, price, category, id;
