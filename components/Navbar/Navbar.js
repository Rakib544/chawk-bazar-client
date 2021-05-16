import React from 'react';
import style from '../../styles/nav.module.css'

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div>
                <h2>site name</h2>
            </div>
            <div>
                <p>shopping cart</p>
                <p>Login</p>
            </div>
        </nav>
    );
};

export default Navbar;