import React from 'react'

export default function EmployeePage(employee) {
  return (
    <div className='employee-page'>
        <div className='employee-header'>Employee</div>
        <div>
            <div>{employee.fname + " "+ employee.lname}</div>
            <div>{employee.position}</div>
        </div>
        <div className='office'>
            <div>Call Office</div>
            <div>{employee.phoneOffice}</div>
        </div>
        <div className='mobile'>
            <div>Call Mobile</div>
            <div>{employee.phoneMobile}</div>
        </div>
        <div className='sms'>
            <div>SMS</div>
            <div>{employee.SMS}</div>
        </div>
        <div className='email'>
            <div>Email</div>
            <div>{employee.Email}</div>
        </div>
    </div>
  )
}
