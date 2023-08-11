import React, { useState } from 'react';
import './dropdow.css';
import { Link } from 'react-router-dom';
import {MdArrowDropDown} from 'react-icons/md'

const Dropin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const band = [
    {
     Link:'/all',
     classname:'dropdown__item',
     class:'li',
     itemname:'All',
     id:'1'
    },
    {
        Link:'/active',
        classname:'dropdown__item',
        class:'li',
        itemname:'Active',
        id:'2'
    },
    {
        Link:'/exited',
        classname:'dropdown__item',
        class:'li',
        itemname:'Exited',
        id:'3'
    }
  ]
  

  const handleClick = () => {
    setIsOpen(!isOpen);
  }


  const land = band.map((item) => (
     <ul key={item.id}>
       <Link className={item.class} to={item.Link}>
          <li className={item.classname} key={item.id}>
            {item.itemname}
          </li>
          </Link>
     </ul>
  ));

  return (
    <div
      className={isOpen ? "dropdown active" : "dropdown"}
  
    >
      <div className="dropdown__text">
      Status  <span className="span" onClick={handleClick}><MdArrowDropDown/></span>
      </div>
      <div className="dropdown__items">{land}</div>
    </div>
  );
}

export default Dropin;
