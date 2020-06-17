import React, { useState } from 'react'

const Search = props => {
    const [text, setState] = useState('');

    const onChange = e => {
        setState(e.target.value);
    }
    const onSubmit = e => {
        props.searchUser(text);
        setState('');
        e.preventDefault();
    }
    return (
        <form onSubmit={onSubmit}>
            <div class="input-group mb-3 mt-3">
                <input type="text" class="form-control" placeholder="Search" onChange={onChange} value={text} />
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary bg-success text-light" type="submit"><i class="fa fa-search"></i></button>
                </div>
            </div>
        </form>
    )
}
export default Search
