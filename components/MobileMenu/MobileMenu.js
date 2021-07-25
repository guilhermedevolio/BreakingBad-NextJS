import React, { useState } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MobileMenu() {

    const [ open, setOpen ] = useState(false);

    return (
        <div className="mobile-menu">
            <p onClick={() => setOpen(!open)}>{open ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}</p>
            {open &&
                <div className="mobile-menu-content">
                    <ul>
                        <li><a href="">Github Code</a></li>
                    </ul>
                </div>
            }
        </div>
       
    )
}