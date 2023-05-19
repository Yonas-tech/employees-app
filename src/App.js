import './App.css';
import HomePage from './pages/HomePage';
import EmployeePage from './pages/EmployeePage';
import { useEffect, useState } from 'react'; 
import EmployeesData from './data/EmployeesData';

function App() {
  // const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState(EmployeesData[0]);
 
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

  useEffect(()=>{console.log(employee)},[employee])

  return (
    <div className="App">
      
      <HomePage employees = {[...EmployeesData] } setEmployee={setEmployee}/> 
      <EmployeePage employee = {employee}/>
    </div>
  );
}

export default App;
