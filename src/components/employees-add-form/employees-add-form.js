import './employees-add-form.css';
import { useState } from 'react';

const EmployeesAddForm = ({onCreateEmployee}) => {

    const [newEmployee,setNewEmployee] = useState({name:'', salary:''})

    const addEmployee = (e) =>{
        e.preventDefault()
        onCreateEmployee(newEmployee.name,newEmployee.salary)
    }

    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex">
                <input onChange={e =>setNewEmployee({...newEmployee,name:e.target.value})}
                value={newEmployee.name}
                type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?" />
                <input onChange={(e) =>setNewEmployee({...newEmployee,salary:e.target.value})}
                value={newEmployee.salary}
                type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?" />

                <button onClick={addEmployee}
                type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;