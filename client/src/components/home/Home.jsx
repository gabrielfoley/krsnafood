import React, { useState } from 'react';
import './home.css';
import KrsnaFood_Web from './KrsnaFood_Web.png';
import { Link, useNavigate } from 'react-router-dom';
import { RiMenu2Fill } from 'react-icons/ri';

const Home = () => {
  const [displayNav, setDisplayNav] = useState(false);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/donate');
  };

  const burgerOpen = () => {
    setDisplayNav(true);
  };
  const burgerClose = () => {
    setDisplayNav(false);
  };

  return (
    <>
      <div className='navContainer'>
        <nav className={displayNav ? 'main-nav' : 'main-nav-close'}>
          <div className='container'>
            <div className='navImg'>
              {/* <img
                src={KrsnaFood_Web}
                alt='Krsna Food'
                height='35'
                width='35'
              /> */}
            </div>
            <div>
              <ul onClick={burgerClose} className='navLinks'>
                <li className='navLink'>
                  <Link to='/'>Videos</Link>
                </li>
                <li className='navLink'>
                  <Link to='/calendar'>Calendar</Link>
                </li>
                <li className='navLink'>
                  <Link to='/volunteer'>Volunteer</Link>
                </li>
                <li onClick={handleClick} className='navLink'>
                  <button className='listBtn'>Donate</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {!displayNav ? (
          <RiMenu2Fill onClick={burgerOpen} className='burgerNav' />
        ) : (
          <RiMenu2Fill onClick={burgerClose} className='burgerNavClose' />
        )}
        <div>
          <div className='welcome'>
            <div>
              <img src={KrsnaFood_Web} alt='Krsna Food' />
            </div>
            <div className='welcomeTextContainer'>
              <div className='welcomeText'>
                Welcome to KRSNA FOOD! We are a nonprofit group working to
                provide nutritious, vegetarian and karma-free meals for hungry
                people in the streets; chiefly in city locations where homeless
                people are known to congregate. Our talented KRSNA cooks are
                among the best vegetarian cooks in the area. Our hot lunch is
                not only packed with wholesome goodness -it is delicious too!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
