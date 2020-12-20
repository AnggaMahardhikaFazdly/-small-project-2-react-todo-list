import React from 'react';

const ListItem = (props) => {
    return (
        <ul className="list-item">
            <li className="fas fa-check" onDoubleClick={props.edit}> {props.name} </li>
            <button className="fas fa-trash trash" onClick={props.delete}></button>
        </ul>
    )
}

export default ListItem;