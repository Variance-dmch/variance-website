import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  <script src="http://localhost:8097"></script>

  return (
    
    <div className='bg-gray-300 bg-no-repeat bg-cover overflow-hidden scale-100'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
