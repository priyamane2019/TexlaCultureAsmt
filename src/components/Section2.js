import React from 'react'
import "./Section2.css"
import { RxCaretDown } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";


const Section2 = () => {
    return (
        <>
            <h3>Onboarded Companies</h3>
            <hr />
            <div className="s2container">
                <div className='tableform'>
                    <div className="serviceall">
                        <div className="all">
                            <div>All</div>
                            <div><RxCaretDown /></div>
                        </div>
                        <div className="searchclient">
                            <CiSearch />
                            <input className="searchip" type="text" placeholder='Search Client or invoice number...' />
                        </div>
                    </div><br/>
                    <div className="table">
                        <table>
                        <thead>
                            <tr>
                                <th>Company Name</th>
                                <th>Onboarding date</th>
                                <th>Go-live Date</th>
                                <th>Total User base</th>
                                <th>Last Billing</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='tdflex1'>
                                    <div>
                                        <img src="./images/tc.png" alt="logo" />
                                    </div>
                                    <div>
                                    Texlaculture<br/>
                                    INV-17048
                                    </div>
                               
                                </td>
                                <td>
                                    12 jan 2022
                                </td>
                                <td>
                                    07 Aug 2022
                                </td>
                                <td>
                                    244
                                </td>
                                <td>
                                    07 Aug 2022
                                </td>
                                <td>
                                <button className='tablebtnA'>Active</button>

                                </td>
                            </tr>

                            <tr>
                                <td className='tdflex2'>
                                <div>
                                        <img src="./images/tc.png" alt="logo" />
                                    </div>
                                    <div>
                                    Texlaculture<br/>
                                    INV-17049
                                    </div>

                                    
                                </td>
                                <td>
                                    11 Feb 2022
                                </td>
                                <td>
                                    06 May 2022
                                </td>
                                <td>
                                1000
                                </td>
                                <td>
                                    07 Aug 2022
                                </td>
                                <td>
                                <button className='tablebtnA'>Active</button>

                                </td>
                            </tr>

                            <tr>
                                <td className='tdflex3' > 
                                <div>
                                        <img src="./images/tc.png" alt="logo" />
                                    </div>
                                    <div>
                                    Texlaculture<br/>
                                    INV-13042
                                    </div>

                                    
                                </td>
                                <td>
                                    10 Sep 2022
                                </td>
                                <td>
                                    05 Oct 2022
                                </td>
                                <td>
                                    150
                                </td>
                                <td>
                                    207 Aug 2022
                                </td>
                                <td>
                                    <button className='tablebtnD'>Draft</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <hr/>
                    </div>

                </div>
                <div className='barchat'>
                    <div className="barcahrt">
                        <img src="./images/barchartm1.png" alt="barchart" />
                    </div>
                </div>
             </div>
             <div className="footerinfo">
                    <img src="./images/footerimg.png" alt="img" />
                </div>

        </>
    )
}

export default Section2