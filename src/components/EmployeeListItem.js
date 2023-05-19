import React from 'react'

export default function EmployeeListItem(employee) {
    console.log(employee)
  return (
    <div className='EmployeeListItem'>
        <p className='empl-name'>{employee.employee.fName + " " + employee.employee.lName}</p>
        <p className='empl-position'>{employee.employee.position}</p>
    </div>
  )
}
