import React from 'react'

 function Default(props) {
    return (
        <div>
            <h1>I am sorry the url {props.location.pathname} is not found </h1>
        </div>
    )
}

export default Default;