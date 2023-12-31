import React from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar title="Textutils2" aboutText="About Us" /> {/* here we are passing props as a title */}
      <div className='container'>
        <TextForm  heading="Enter the text Below.."/> {/*passing heading as a props  */}
        <About/>
      </div>
    </>
  );
}

export default App;
