import Link from 'next/link';
import React from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';

export default function Header() {
    return (
        <div className="header">
            <div className="header-content">
                <h2>Breaking Bad | NextJS</h2>
                <div className="header-menu">
                    <a className="link"><li><a href="">Fake Menu</a></li></a>
                    <div className="btn-login">
                        <a href="https://github.com/Guilherme5889">Github Code</a>
                    </div>
                </div>
                <MobileMenu/>
            </div>
        </div>
    )
}