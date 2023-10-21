import React from 'react'
import "./Aside.css";
import { RxCaretDown } from "react-icons/rx";
import { RxCaretRight } from "react-icons/rx";

const Aside = () => {
  return (
    <>
     <div className="asidecontainer">
        <div className="content">
        <img src="./images/texlaCulture.png" alt="logo" />
        </div>
        <p>GENERAL</p>
        <div className="generalInfo">
            <div className="general1">
                <div className='icon1'>
                    <img src="./images/dash.png" alt="logo" />
                </div> 
                <div className='text1'>Dahboard</div>
                <div className='react-icon1'><RxCaretDown size={20}/> </div>
            </div>
            <div className="general2">
            <div className='icon2'>
                    <img src="./images/company.png" alt="logo" />
                </div> 
                <div className='text1'>Dahboard</div>
                <div className='react-icon1'><RxCaretRight size={20}/> </div>

            </div>
            <div className="general3">
            <div className='icon3'>
                    <img src="./images/company.png" alt="logo" />
                </div> 
                <div className='text1'>Dahboard</div>
                <div className='react-icon1'><RxCaretRight size={20}/> </div>

            </div>
            <div className="general4">
            <div className='icon4'>
                    <img src="./images/company.png" alt="logo" />
                </div> 
                <div className='text1'>Dahboard</div>
                <div className='react-icon1'><RxCaretRight size={20}/> </div>

            </div>
        </div>
     </div>

    </>
  )
}

export default Aside