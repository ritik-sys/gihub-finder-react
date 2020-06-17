import React from 'react'

const Alert = (props) => {


    if (props.isSearchEmpty) {
        return (
            <div class="alert alert-danger" role="alert">
                Please Enter Something
            </div>


        )
    }
    else {
        return null
    }

}

export default Alert
