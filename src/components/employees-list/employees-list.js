import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({employees,onChangeIncrease,onChangeLike}) => {
    return (
        <ul className="app-list list-group">
            {
                employees.map(employee => {
                    return <EmployeesListItem
                    onChangeLike={onChangeLike}
                    onChangeIncrease={onChangeIncrease} 
                    key={employee.id}
                    {...employee} />
                })
            }
        </ul>
    )
}

export default EmployeesList;