import React from 'react'
import HomeHeader from '../components/HomeHeader';
import SearchBar from '../components/SearchBar';
import EmployeeList from '../components/EmployeeList';

export default function HomePage(employees) {
  return (
    <div className='home-page'>
        <HomeHeader/>
        <SearchBar/>
        <EmployeeList  employees = {[...employees.employees]}/>
    </div>
  )
}


