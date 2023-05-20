import React from 'react'
import HomeHeader from '../components/HomeHeader';
import SearchBar from '../components/SearchBar';
import EmployeeList from '../components/EmployeeList';
import { useState } from 'react';
import { useEffect } from 'react';


export default function HomePage({ employees, setEmployee }) {

  const [searchTerm, setSearchTerm] = useState(null);
  const [searchResult, setSearchResult] = useState(null);
// (employees[i].fName + " " + employees[i].lName).includes(searchTerm)
  useEffect(() => {
    setSearchResult(() => {
      let result = [];
      if (searchTerm) {
        for (let i = 0; i < employees.length; i++) {
          if (employees[i].fName.startsWith(searchTerm) || employees[i].lName.startsWith(searchTerm)) {
            result.push(employees[i])
          }
        }
      }
      return result
    })
  }, [searchTerm])

  return (
    <div className='home-page'>
      <HomeHeader />
      <SearchBar setSearchTerm={setSearchTerm} />
      {searchResult && searchResult.length>0 ?
        <EmployeeList employees={searchResult} setEmployee={setEmployee} />
        :
        <EmployeeList employees={employees} setEmployee={setEmployee} />
      }
    </div>
  )
}


