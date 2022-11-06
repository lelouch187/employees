import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';
import { useState } from 'react';

function App() {

  const [employees,setEmployees] = useState([
    {id:1, name:'Ivan Mehanikov', salary:3000, increase:false, like:false},
    {id:2, name:'Zahar Nikitin', salary:2000, increase:false, like:false},
    {id:3, name:'Alexander Erofeev', salary:1500, increase:false, like:false}
  ])

  const onChangeIncrease = (id) => {
    employees.map((employee,index) => {
      if(employee.id == id) {
        setEmployees([...employees],employees[index].increase=!employees[index].increase)
      }
    })
  }
  const onChangeLike = (id) => {
    employees.map((employee,index) => {
      if(employee.id == id) {
        setEmployees([...employees],employees[index].like=!employees[index].like)
      }
    })
  }
  const onDeleteEmployee = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id))
    }


  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList onDeleteEmployee={onDeleteEmployee}
        onChangeLike={onChangeLike}
        onChangeIncrease={onChangeIncrease}
        employees={employees} />
        <EmployeesAddForm/>
    </div>
  );
}

export default App;
