import React, { Fragment, useEffect } from 'react'
import Spinner from '../Spinner/Spinner';
import { Link } from 'react-router-dom';


const User = (props) => {
    useEffect(() => {
        props.getUser(props.match.params.login);
        //eslint-disable-next-line
    }, []);
    const {
        name,
        location,
        bio,
        hireable,
        blog,
        login,
        html_url,
        followers,
        following,
        public_gists,
        public_repos,
        avatar_url,
        company
    } = props.user;
    if (props.loading) {
        return (
            <Spinner />
        )
    }
    else {
        return (
            <Fragment>
                <Link to="/" className="btn btn-dark m-2">Go to Home</Link>
                    Hireable:{''}
                {hireable ? <i className="fas fa-check text-sucess" /> : <i className="fas fa-times-circle text-danger" />}
                <div className="card shadow m-2 p-2">
                    <div className="row">
                        <div className="col-4 text-center">
                            <img src={avatar_url} className="img-fluid" />
                            <h3>{name}</h3>
                            <p>
                                {location}
                            </p>
                        </div>
                        <div className="col-8 text-center">
                            {bio && <Fragment>
                                <h4>Bio</h4>
                                <p className="text-left">{bio}</p>
                            </Fragment>}
                            <a href={html_url} style={{ textDecoration: "none" }}><div className="btn btn-dark btn-block" >Go to Github Profile</div></a>
                            <ul className="list-group">
                                <li className="list-group-item">Username : {login}</li>
                                {company && <li className="list-group-item">
                                    Company : {company}
                                </li>}
                                {blog && <li className="list-group-item">
                                    Website : {blog}
                                </li>}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card p-2 m-2">
                    <div className="row mx-auto">
                        <div className="col">
                            <span class="badge badge-pill badge-primary m-2">Followers : {followers}</span>
                            <span class="badge badge-pill badge-secondary m-2">Following : {following}</span>
                            <span class="badge badge-pill badge-success m-2">Public Gists : {public_gists}</span>
                            <span class="badge badge-pill badge-danger m-2">Public Repos : {public_repos}</span>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

}

export default User