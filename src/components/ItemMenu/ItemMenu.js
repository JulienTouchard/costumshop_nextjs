import React from 'react';
//import './ItemMenu.css';

const ItemMenu = (props) => {
  return (
    <a className="ItemMenu" href={props.data.url}>
      <li className={props.data.isActive ? "selectedTab" : ""}>{props.data.titre}</li>
    </a>
  )
};

export default ItemMenu;
