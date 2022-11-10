import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';
import { useState } from 'react';

function App() {

  const initialState = [{id:1, name:'Ivan Mehanikov', salary:3000, increase:false, like:false},
  {id:2, name:'Zahar Nikitin', salary:2000, increase:false, like:false},
  {id:3, name:'Alexander Erofeev', salary:1500, increase:false, like:false}]

  const [employees,setEmployees] = useState(initialState)
  const [sortEmployees,setSortEmployees] = useState(employees)

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

  const onCreateEmployee = (name, salary) => {
    setEmployees(employees.concat([{id:Date.now(), name, salary,increase:false, like:false}]))
  }
  const sortIncrease =() => {
    setSortEmployees(employees.filter(e =>e.increase))
  }
  const sortDef = () => {
    setSortEmployees(employees)
  }
  const sortSalary = () => {
    setSortEmployees(employees.filter(emp => emp.salary>1000))
  }
  const onSearchEmp = (value) => {
    if (value) {
      setSortEmployees(employees
        .filter(emp=>emp.name.toLowerCase().includes(value.toLowerCase())))
    }
    else setSortEmployees(employees)
  }


  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel onSearchEmp={onSearchEmp}/>
            <AppFilter sortSalary={sortSalary}
            sortDef={sortDef}
            sortIncrease={sortIncrease}/>
        </div>
        
        <EmployeesList onDeleteEmployee={onDeleteEmployee}
        onChangeLike={onChangeLike}
        onChangeIncrease={onChangeIncrease}
        employees={sortEmployees} />
        <EmployeesAddForm onCreateEmployee={onCreateEmployee}/>
    </div>
  );
}

export default App;
