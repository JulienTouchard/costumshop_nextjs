import React from 'react';
// exemple avec  SimpleIcons
// https://simpleicons.org/
// npm add @icons-pack/react-simple-icons
/* import { SiBaserow } from '@icons-pack/react-simple-icons'; */

//import './Burger.css';

const Burger = (props) => {
  return (

    <div className="Burger" onClick={props.click}>
      {/* <SiBaserow color='#61DAFB' size={24} /> */}
      BURGER
    </div>
  )
};
export default Burger;
