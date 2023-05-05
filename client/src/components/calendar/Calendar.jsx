import React from 'react';
import './calender.css';

const Calendar = () => {
  return (
    <div className='calender'>
      <div className='calenderContainer'>
        <div className='calenderTitle'>Be There!</div>
        <ul className='calenderUl'>
          <li className='calenderList'>
            {' '}
            Berkeley - SUNDAYS at <span className='text'>
              6:30PM
            </span> <br /> ISKCON Berkeley 2234 Stuart Street Berkeley, CA 94705{' '}
            <br /> Phone: <span className='text'>510-540-9215 </span>{' '}
            <a className='a' target='_blank' href='https://iskconberkeley.us/'>
              {' '}
              https://iskconberkeley.us/
            </a>
          </li>
          <li className='calenderList'>
            {' '}
            San Fancisco - <b>6th</b> and Jessie Streets -{' '}
            <b>(SUSPENDED UNTIL FURTHER NOTICE!)</b>
          </li>
          <li className='calenderList'>
            {' '}
            Vallejo - <b>(COMING SOON!)</b>{' '}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Calendar;
