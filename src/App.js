import React from 'react';
import './App.css'; 
import Header from "./components/Header"
import Aside from "./components/Aside"
import Section1 from "./components/Section1"



const App = () => {
  return (
    <>
    <div className="container">
      <div className="column1">
        <div className="full-height-div">
        <Aside />
        </div>
      </div> 
      <div className="column2">
      <Header />
       <Section1/>
        </div>   
        
    </div>
    </>
  );
};

export default App;


// import React from 'react'
// import Section1 from "./components/Section1"

// const App = () => {
//   return (
    
//    <>
//     <Section1/>
//     </>
//   )
// }

// export default App
