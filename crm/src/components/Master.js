import React, { useContext } from "react";
import { MastersContext } from "../contexts/mastersContext";

export function Master({ master }) {
    const { photo, fullName, position } = master;
    const { remove } = useContext(MastersContext);

    return (
        <div className="Master" style={{display: 'inline-block', margin: '0 15px'}}>
            <div><img src={photo} width="200" alt="" /></div>
            <p>{fullName}</p>
            <p>{position}</p>
            <button onClick={() => remove(master)}>Удалить X</button>
        </div>
    );
}