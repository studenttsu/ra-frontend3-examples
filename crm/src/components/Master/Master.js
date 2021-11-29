import React from "react";

export function Master({ master, onRemove }) {
    const { id, photo, fullName, position } = master;

    function remove() {
        onRemove();
    }

    return (
        <div className="Master">
            {id}
            <div><img src={photo} width="200" alt="" /></div>
            <p>{fullName}</p>
            <p>{position}</p>
            <button onClick={remove}>Удалить X</button>
        </div>
    );
}