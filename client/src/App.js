import React from 'react';
import Home from './components/home/Home';
import Volunteer from './components/volunteer/Volunteer';
import Calendar from './components/calendar/Calendar';
import Donate from './components/donate/Donate';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/home/nav/Nav';
import Feed from './components/videoCards/Feed';
import ScrollToTop from './utils/scroll/SrollToTop';

const App = () => {
  return (
    <>
      <Home />
      <Routes>
        <Route path='/volunteer' element={<Volunteer />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/' element={<Feed />} />
      </Routes>

      <Nav />
      <ScrollToTop />
      {/* <BottomBar/> */}
    </>
  );
};
export default App;
