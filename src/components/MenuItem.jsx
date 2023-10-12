import React from "react";

const MenuItem = ({ img, desc, title, price, category, id }) => {
  return (
    <article className="item">
      <img src={img} alt="" />
      <div className="title-price">
        <h4 className="item-title">{title}</h4>
        <h4 className="price">${price}</h4>
      </div>
      <p className="desc">{desc}</p>
    </article>
  );
};

export default MenuItem;
