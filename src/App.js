import './App.css';
import HomePage from './pages/HomePage';
import EmployeePage from './pages/EmployeePage';
import { useEffect, useState } from 'react'; 
import EmployeesData from './data/EmployeesData';
// const EmployeesData = require('./data/EmployeesData')

function App() {
  // const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState({});
 
  // useEffect(()=>{
  //   console.log('employee: '+ JSON.stringify(employees[1]))
  // }, [employees])

  // useEffect(()=>{
  //   async function fetchData(){
  //     const data = await [...require('./data/EmployeesData')];
  //     setEmployees(data);
  //   }
  //   fetchData();
  // },[])

  return (
    <div className="App">
      <HomePage employees = {[...EmployeesData]}/>
      <EmployeePage employee = {employee}/>
    </div>
  );
}

export default App;
