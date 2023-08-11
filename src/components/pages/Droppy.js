import React, { useState } from 'react';
import './dropdow.css';
import { Link } from 'react-router-dom';
import {MdArrowDropDown} from 'react-icons/md'

const Droppy = () => {
  const [isOpen, setIsOpen] = useState(false);

  const band = [
    {
     Link:'/climate',
     classname:'dropdown__item',
     class:'li',
     itemname:'ClimateTech',
     id:'1'
    },
    {
        Link:'/consumer',
        classname:'dropdown__item',
        class:'li',
        itemname:'Consumer',
        id:'2'
    },
    {
        Link:'/fintech',
        classname:'dropdown__item',
        class:'li',
        itemname:'Fintech',
        id:'3'
    },
    {
     Link:'/gaming',
     classname:'dropdown__item',
     class:'li',
     itemname:'Gaming',
     id:'4'
    },
    {
        Link:'/music',
        classname:'dropdown__item',
        class:'li',
        itemname:'Music',
        id:'5'
    },
    {
        Link:'/sports',
        classname:'dropdown__item',
        class:'li',
        itemname:'Sports',
        id:'6'
    },
    {
        Link:'/technology',
        classname:'dropdown__item',
        class:'li',
        itemname:'Technology',
        id:'7'
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
      Category  <span className="san" onClick={handleClick}><MdArrowDropDown/></span>
      </div>
      <div className="dropdown__items">{land}</div>
    </div>
  );
}

export default Droppy;
