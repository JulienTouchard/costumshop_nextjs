import React from 'react';
import ItemMenu from '../ItemMenu/ItemMenu';
//import './UlMenu.css';
import Search from '../Search/Search';
const UlMenu = (props) => {
  // console.dir(props.tabMenuNav);
  // console.dir(props.orientation);
  return (
    <ul  className={ props.orientation ? "gradiant menuEntriesMobile" : "menuEntries" }>
      {/* array.map() est quasiment l'equivalent de array.forEach() */}
      {
        props.tabMenuNav.map((element,index) => {
          return (<ItemMenu data={element} key={index}></ItemMenu>)
        })
      }
      <Search></Search>
    </ul>
  );
}
export default UlMenu;
