import React from 'react';
import Navbar from './components/Navbar';
import About from './About';
import Cover from './Cover';
import Portfolio from './Portfolio';

const App = () => {
  return (
    <>
      <Navbar />
      <Cover />
      <About />
      <Portfolio />
    </>
  );
};

export default App;