import React from 'react'
import { useState, useEffect } from 'react';


export default function EmployeePage({ employee }) {
    // ../Images/${employee.fName+employee.lName}.png 

    const [portrait, setPortrait] = useState(null);

    useEffect(() => {
        setPortrait(require(`../Images/${employee.fName + employee.lName}.png`))
    }, [employee])

    return (
        <div className='employee-page'>
            <div className='employee-header'>
                <p className='leftArrow'> </p>
                <p className='empployee'>Employee</p>
            </div>
            <div className="employee-container">
                <div className='portrait-name'>
                    {/* <div 
                    style={{
                        backgroundImage: `url(${portrait})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        width:'50%',
                        height:'200px',}}
                    ></div> */}
                        <img src={`${portrait}`} alt="portrait" />
                    
                    <div className='name-position'>
                        <h3>{employee.fName + " " + employee.lName}</h3>
                        <p>{employee.position}</p>
                    </div>
                </div>
                <hr />
                <div className='office contact'>
                    <div className='main'>
                        <h4>Call Office</h4>
                        <p>{employee.phoneOffice}</p>
                    </div>
                    <div className='right-arrow'>
                        <a rel="noopener" target="_blank" href={`tel:${employee.phoneOffice}`}>
                            <p>{'\u003E'}</p>
                        </a>
                    </div>
                </div>
                <hr />
                <div className='mobile contact'>
                    <div className='main'>
                        <h4>Call Mobile</h4>
                        <p>{employee.phoneMobile}</p>
                    </div>
                    <div className='right-arrow'>
                        <a rel="noopener" target="_blank" href={`tel:${employee.phoneMobile}`}>
                            <p>{'\u003E'}</p>
                        </a>
                    </div>

                </div>
                <hr />
                <div className='sms contact'>
                    <div className='main'>
                        <h4>SMS</h4>
                        <p>{employee.SMS}</p>
                    </div>
                    <div className='right-arrow'>
                        {/* I will use URLEncoder for the body of the text message */}
                        <a rel="noopener" target="_blank" href={`sms:${employee.SMS}?&body=Please%20call%20me%21`}>
                            <p>{'\u003E'}</p>
                        </a>
                    </div>
                </div>
                <hr />
                <div className='email contact'>
                    <div className='main'>
                        <h4>Email</h4>
                        <p>{employee.Email}</p>
                    </div>
                    <div className='right-arrow'>
                        <a href={`mailto:${employee.Email}`}>
                            <p>{'\u003E'}</p>
                        </a>
                    </div>

                </div>
                <hr />
            </div>

        </div>
    )
}
