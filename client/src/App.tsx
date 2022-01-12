import React,{useState} from 'react';
import {Navbar, Welcome, Footer, Services, Transactions} from './components';

const App = ():React.ReactElement => {
  return (
    <div className="App min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar/>
        <Welcome/>
      </div>
      <Services/>
      <Transactions/>
      <Footer/>
    </div>
  )
}

export default App
