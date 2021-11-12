import React from 'react';

const FormDetails = (props) => {
    const { details } = props;

    if(!details){
        return <h3>Loading team members. </h3>
    }

    return(
        
        <div>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p> Phone Number: {details.phoneNumber ? details.phoneNumber : `No phone number available`}</p>
        </div>

    )

}

export default FormDetails