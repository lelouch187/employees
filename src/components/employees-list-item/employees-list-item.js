import classNames from 'classnames';
import './employees-list-item.css';

const EmployeesListItem = ({name,increase,like,salary,id,onChangeIncrease,onChangeLike}) => {
    return (
        <li className={classNames("list-group-item d-flex justify-content-between",
        {'increase':increase},{'like':like})}>
            <span onClick={()=>onChangeIncrease(id)}
            className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={`${salary}$`}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button onClick={() => onChangeLike(id)}
                type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;