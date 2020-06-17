import React, { useEffect } from 'react'
import RepoItem from './RepoItem'
import Spinner from '../Spinner/Spinner';
const Repos = props => {


    useEffect(() => {
        props.getUserRepos(props.match.params.login);
    }, [])

    if (props.loading) {
        return (
            <Spinner />
        )
    }
    else {
        return (

            <div>
                <h1 className="text-center">Repositories</h1>
                {
                    props.repos.map(repo => (

                        <RepoItem key={repo.id} repo={repo} />
                    ))
                }
            </div>
        )
    }

}

export default Repos
