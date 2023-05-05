import React from 'react';
//import Tab from '@material-ui/core/Tab';
//import { InfoSquareFill } from '@styled-icons/bootstrap/';
import "./BottomBar.scss"
//import { AiFillInfoCircle } from 'react-icons/ai';
//import { AiFillSchedule } from 'react-icons/ai';
import { Donate, HandsHelping, Video, CalendarDays } from '@styled-icons/fa-solid/';
//import { HandsHelping } from '@styled-icons/fa-solid/HandsHelping';
//import { Router } from 'react-router-dom';
import { Link } from 'react-router-dom';


const BottomBar = props => (
  <header className="bottom">
    <nav className='bottom_navigation'>
   
      <div className='spacer'/>
      <div className='bottom_navigation-items'>
        <ul>
        {/*<Link to="/HeaderGrid">
          //<li><InfoSquareFill size={42} marginTop={100} /></li> }
          </Link>
          */}
          <Link to="/">

          <li><Video size={49} /></li>
          </Link>
          <Link to='/calendar' >
        <li><CalendarDays size={43}/></li>
        </Link>
          
           { //<li><a href="/"><Calendar size={45} /></a></li>
           }
           <Link to='/volunteer'>
          <li><HandsHelping size={49} /></li>
          </Link>
          <Link to="/donate">
          <li><Donate size={45} /></li>
          </Link>
        </ul>
      </div>
      
    
      
      </nav>
  </header>
);

export default BottomBar;