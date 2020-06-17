import React, { Component } from 'react'


class Clear extends Component {
    onClick = () => {
        this.props.clearUsers();
    }

    render() {

        if (this.props.showClear) {
            return (
                <div>
                    <buton className="btn btn-dark btn-block shadow" onClick={this.onClick}>
                        Clear
                    </buton>
                </div>
            )
        }
        else {
            return null
        }
    }
}
export default Clear
