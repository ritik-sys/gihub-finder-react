import React from 'react'
const RepoItem = props => {
    return (
        <div>
            <ul class="list-group m-1 ">
                <a href={props.repo.html_url} target="_blank" style={{ textDecoration: "none" }}><li class="list-group-item list-group-item-success">{props.repo.name}</li></a>
            </ul>
        </div>
    )
}



export default RepoItem
