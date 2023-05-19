import React from 'react';
import EmployeeListItem from './EmployeeListItem';

export default function EmployeeList(employees) {
    console.log(employees.employees)

  return (
    <div className='EmployeeList'>
        {employees.employees.map((employee, idx)=>{
            return(
                <EmployeeListItem employee={employee} key={idx}/> 
            )
        })}
    </div>
  )
}
