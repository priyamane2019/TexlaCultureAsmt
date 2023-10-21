import React from 'react'
import Section2 from "./Section2"
import "./Section1.css";
const Section1 = () => {
    return (
        <>
            <div className="scontainer">
                <h4>Client Management</h4>
                <div className='nav'>
                <div>Dashboard <hr className='hr'/></div>
                <div>Client Details</div>
                </div><br/>
                <div className="title">
                    <span> Key Performance Indicator</span>
                    <span>Companies Status</span>
                    <span>Active User Base</span>
                </div>
                <div className="sectioninfo1">
                    <div className='performence'>
                        <div className='keyindecator1'>
                            <p className='rate'>Client Retention Rate </p>
                            <h3 className='prate1'>55%</h3>
                        </div>
                        <div className='keyindecator2'>
                            <p className='rate'>Client Satisfaction</p>
                            <h3 className='prate2'>55%</h3>
                        </div>
                        <div className='keyindecator3'>
                            <p className='rate'>Revenue Generated</p>
                            <h3 className='prate3'>55%</h3>
                        </div>
                    </div>
                    <div className='cmpystatus'>
                        <div className='keyindecator-1'>
                            <p className='rate-1'>Total </p>
                            <h3 className='prate-1'>55%</h3>
                        </div>
                        <div className='keyindecator-2'>
                            <p className='rate-2'>Active</p>
                            <h3 className='prate-2'>55%</h3>
                        </div>
                        <div className='keyindecator-3'>
                            <p className='rate-3'>New</p>
                            <h3 className='prate-3'>55%</h3>
                        </div>
                    </div>
                    <div className='userbar'>
                        <div className="barrange1">
                            <div className='rangerow1'>
                                <div className="circlebl"></div>
                                <div> 89% App user</div>
                            </div><br />
                            <div className='blrange1'></div>
                        </div>

                        <div className="barrange2">
                        <div className='rangerow2'>
                                        <div className="circlegr"></div>
                                        <div> 11% Web user</div>
                                    </div><br />
                                    <div className='blrange2'></div>

                        </div>

                    </div>

                </div>
            </div>
            <Section2/>
        </>
    )
}

export default Section1