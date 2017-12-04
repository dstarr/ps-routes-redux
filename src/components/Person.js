import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap'

let Person = ({id, index, first, last, occupation, handleDelete, handleEdit}) => {

    return (
        <tr key={index}>
            <td>{id}</td>
            <td>{first + ' ' + last}</td>
            <td>{occupation}</td>
            <td>
                <Button onClick={e => handleDelete(e, id)}>Delete</Button>
            </td>
        </tr>
    )
};


Person.PropTypes = {
    id: PropTypes.number.isRequired,
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired
};

export default Person;





