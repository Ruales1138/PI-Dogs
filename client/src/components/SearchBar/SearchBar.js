import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogByName } from "../../redux/actions";

function SearchBar() {
    const [name, setName] = useState('');
    const dispatch = useDispatch()

    function handleChange(e) {
        setName(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getDogByName(name))
        setName('');
    };

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <input value={name} onChange={e => handleChange(e)}/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
};

export default SearchBar;