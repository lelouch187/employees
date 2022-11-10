import "./app-filter.css";

const AppFilter = ({sortIncrease,sortDef,sortSalary}) => {
    return (
        <div className="btn-group">
            <button onClick={sortDef}
            type="button"
                    className="btn btn-light">
                    Все сотрудники
            </button>
            <button onClick={sortIncrease}
            type="button"
                    className="btn btn-outline-light">
                    На повышение
            </button>
            <button onClick={sortSalary}
            type="button"
                    className="btn btn-outline-light">
                    З/П больше 1000$
            </button>
        </div>
    )
}

export default AppFilter;