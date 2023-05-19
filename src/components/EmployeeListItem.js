import React from 'react'

export default function EmployeeListItem({employee, setEmployee}) {
    const data = employee;



  return (
    <div className='EmployeeListItem' onClick={(e)=>{setEmployee(data)}}>
        <img src={`../Images/${data.fName + data.lName}.png`} alt="" />
        <p className='empl-name'>{data.fName + " " + data.lName}</p>
        <p className='empl-position'>{data.position}</p>
    </div>
  )
}
