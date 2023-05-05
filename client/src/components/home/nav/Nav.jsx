import './nav.css';

import { AiOutlineHome } from 'react-icons/ai';
import { FaDonate, FaHandsHelping } from 'react-icons/fa';
import { BsCameraVideo } from 'react-icons/bs';
import { SlCalender } from 'react-icons/sl';
import { useNavigate } from 'react-router';

import { useState } from 'react';

export const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const navigate = useNavigate();

  const HandleHome = () => {
    setActiveNav('#');
    navigate('/');
  };
  const HandleVideos = () => {
    setActiveNav('#videos');
    navigate('/');
  };
  const HandleCalender = () => {
    navigate('/calendar');
    setActiveNav('#calender');
  };
  const HandleVolunteer = () => {
    setActiveNav('#volunteer');
    navigate('/volunteer');
  };
  const HandleDonate = () => {
    setActiveNav('#donate');
    navigate('/donate');
  };

  return (
    <nav className='nav'>
      <a
        href='#'
        onClick={HandleHome}
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href='#videos'
        onClick={HandleVideos}
        className={activeNav === '#videos' ? 'active' : ''}
      >
        <BsCameraVideo />
      </a>

      <a
        href='#calender'
        onClick={HandleCalender}
        className={activeNav === '#calender' ? 'active' : ''}
      >
        <SlCalender />
      </a>
      <a
        href='#volunteer'
        onClick={HandleVolunteer}
        className={activeNav === '#volunteer' ? 'active' : ''}
      >
        <FaHandsHelping />
      </a>
      <a
        href='#donate'
        onClick={HandleDonate}
        className={activeNav === '#donate' ? 'active' : ''}
      >
        <FaDonate />
      </a>
    </nav>
  );
};

export default Nav;
