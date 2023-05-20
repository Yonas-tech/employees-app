import React from 'react'
import Image from './Image';


export default function EmployeeListItem({employee, setEmployee}) {
    const data = employee;

    // ${data.fName + data.lName}

  return (
    <div className='EmployeeListItem' onClick={(e)=>{setEmployee(data)}}>
        {/* <img src={require(`../Images/EugeneLee.png`)} alt="portrait" /> */}
        
        <Image imageName={`${data.fName + data.lName}`}/>

        <p className='empl-name'>{data.fName + " " + data.lName}</p>
        <p className='empl-position'>{data.position}</p>
    </div>
  )
}
