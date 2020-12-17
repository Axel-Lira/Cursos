import React from 'react';
import './styles/welcome.css'
const Welcome=({username})=>(
        <div className="container">
            <div className="Fitness-User-Info">
                <h1>Hola {username}</h1>
                <p>Vamos a con todo</p>
            </div>
        </div>
)
export default Welcome