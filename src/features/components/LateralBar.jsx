import React from 'react'
import { Link } from 'react-router-dom';

export const LateralBar = () => {

    return (
        <div className='lateralBar'>
            <ul className='list'>
                <li>
                    <Link to={'/'}>Página principal</Link>
                </li>
                <li>
                    <Link to={'/battle'}>Combate</Link>
                </li>
            </ul>
        </div>
    )
}
