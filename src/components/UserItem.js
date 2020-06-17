import React from 'react'
import { Link } from 'react-router-dom'
const UserItem = (props) => {
    const { login, avatar_url, html_url } = props;
    return (

        <div className="card mt-3">
            <img src={avatar_url} alt="" className="rounded-circle mx-auto mt-2" height="100px" width="100px" />
            <h5 className="text-center">{login}</h5>
            <Link to={`/user/${login}`} className="mx-auto"> <button className="btn btn-dark mx-auto mb-2"><a className="text-light" target="_blank" style={{ textDecoration: "none" }} href={html_url}>MORE</a></button></Link>
        </div>
    )
}

export default UserItem
