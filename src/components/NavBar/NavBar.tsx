import React, { FC } from 'react';
import { Link } from 'gatsby';

export interface Props { }

const NavBar: FC<Props> = () => {
    return (
        <>
            <nav>
                <div className={`${'navLink'}`}>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li><Link to='/blog'>Blogs</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar;