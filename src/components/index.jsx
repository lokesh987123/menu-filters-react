import React, { useState } from "react";
import MenuItems from "./MenuItems";
import MenuButtons from "./MenuButtons";
import menuList from "../data";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const uniqueCategorySet = new Set(
    menuList.map((x) => {
      return x.category;
    })
  );
  const uniqueCategory = ["All", ...uniqueCategorySet];

  return (
    <section className="menu">
      <article className="category-btns">
        <MenuButtons
          setSelectedCategory={setSelectedCategory}
          uniqueCategory={uniqueCategory}
        ></MenuButtons>
      </article>
      <article className="menu-items">
        <MenuItems selectedCategory={selectedCategory} />
      </article>
    </section>
  );
};

export default Menu;
