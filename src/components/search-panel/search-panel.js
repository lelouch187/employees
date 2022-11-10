import { useState } from 'react';

import './search-panel.css';

const SearchPanel = ({onSearchEmp}) => {

    const [value,setValue] = useState('')

    const onSearch = (e) => {
    setValue(e.target.value)
    onSearchEmp(e.target.value)
    }

    return (
        <input onChange={e=>onSearch(e)}
        value={value}
        type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"/>
    )
}

export default SearchPanel;