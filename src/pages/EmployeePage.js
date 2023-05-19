import React from 'react'


export default function EmployeePage({ employee }) {

    return (
        <div className='employee-page'>
            <div className='employee-header'>
                <p className='leftArrow'> </p>
                <p className='empployee'>Employee</p> 
            </div>
            <div className="employee-container">
                <div className='portrait-name'>
                    <div style={{backgroundImage: `url(../Images/${employee.fName+employee.lName}.png)`}}>
                        {/* <img src={`../Images/${employee.fName+employee.lName}.png`} alt="portrait" /> */}
                    </div>
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
                            <p>{'\u003E'}</p>
                    </div>
                </div>
                <hr />
                <div className='mobile contact'>
                    <div className='main'>
                        <h4>Call Mobile</h4>
                        <p>{employee.phoneMobile}</p>
                    </div>
                    <div className='right-arrow'>
                            <p>{'\u003E'}</p>
                    </div>
                    
                </div>
                <hr />
                <div className='sms contact'>
                    <div className='main'>
                        <h4>SMS</h4>
                        <p>{employee.SMS}</p>
                    </div>
                    <div className='right-arrow'>
                            <p>{'\u003E'}</p>
                    </div>
                </div>
                <hr />
                <div className='email contact'>
                    <div className='main'>
                        <h4>Email</h4>
                        <p>{employee.Email}</p>
                    </div>
                    <div className='right-arrow'>
                            <p>{'\u003E'}</p>
                    </div>
                    
                </div>
                <hr />
            </div>

        </div>
    )
}
