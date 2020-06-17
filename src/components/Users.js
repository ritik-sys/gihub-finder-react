import React, { Component } from 'react'
import UserItem from './UserItem'
import Spinner from '../Spinner/Spinner'

class Users extends Component {
    render() {
        if (this.props.loading && this.props.isSearchEmpty === false) {
            return (
                <Spinner />
            )
        }
        else {
            return (
                <div className="row" >
                    {
                        this.props.users.map(user => (
                            <div className="col-4">
                                <UserItem key={user.id} login={user.login} avatar_url={user.avatar_url} html_url={user.html_url} />
                            </div>
                        ))
                    }
                </div>
            )
        }

    }

}

export default Users
