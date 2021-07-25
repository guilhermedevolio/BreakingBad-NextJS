import React from 'react';

export default function Card({user}) {
    return (
        <div className="card">
            <div className="img-card"><img src={user.img}></img></div>
            <div className="card-info">
                <p><strong>Nome: </strong>{user.name}</p>
                <p><strong>Status: </strong>{user.status}</p>
                <p><strong>Nome Ator: </strong>{user.portrayed}</p>
            </div>
        </div>
    )
}