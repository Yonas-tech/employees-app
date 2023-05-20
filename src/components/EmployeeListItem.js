import React from 'react'
import Image from './Image';
import { useState, useEffect } from 'react';


export default function EmployeeListItem({ employee, setEmployee }) {

  // ${employee.fName + employee.lName}
  const [portrait, setPortrait] = useState(null);

  useEffect(() => {
    setPortrait(require(`../Images/${employee.fName + employee.lName}.png`))
  }, [])

  return (
    <div className='EmployeeListItem' onClick={(e) => { setEmployee(employee) }}>
      <img className="listPortrait" src={portrait} alt="portrait" />
      <div className='name-position'>
        <p className='empl-name'>{employee.fName + " " + employee.lName}</p>
        <p className='empl-position'>{employee.position}</p>
      </div>

    </div>
  )
}
