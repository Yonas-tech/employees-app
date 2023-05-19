import React from 'react';
import EmployeeListItem from './EmployeeListItem';

export default function EmployeeList({employees, setEmployee}) {
    console.log(employees)

  return (
    <div className='EmployeeList'>
        {employees.map((employee, idx)=>{
            return(
                <EmployeeListItem employee={employee} key={idx} setEmployee={setEmployee}/> 
            )
        })}
    </div>
  )
}
