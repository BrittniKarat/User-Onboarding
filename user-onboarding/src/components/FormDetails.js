import React from 'react';

const FormDetails = (props) => {
    const { details } = props;

    if(!details){
        return <h3>Loading team members. </h3>
    }

    return(
        <div>
            <h2>{details.name}</h2>
            <p>{details.email}</p>
            <p>{details.phoneNumber}</p>
        </div>

    )

}