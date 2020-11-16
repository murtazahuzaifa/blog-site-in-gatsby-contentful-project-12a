import React, { FC } from 'react';
import { Link } from 'gatsby';
const style = require('./navBar.module.css');
import { Typography } from '@material-ui/core';
import { StaticQueryType } from '../../typedefs';
import { Magnify } from 'mdi-material-ui';
// import {Nature} from 'mdi-material-ui';
import { Logo } from '../Images';

export interface Props { }

const NavBar: FC<Props> = () => {

    // const { site } = useStaticQuery<StaticQueryType>(
    //     graphql`
    //       query {
    //         site {
    //           siteMetadata {
    //             logoSrc
    //           }
    //         }
    //       }
    //     `
    // )

    return (
        <div className={`${style.navBar}`} >
            <div className={`${style.top}`} >
                <div className={`${style.logo}`} >
                    <a href="/"><Logo /></a>
                </div>
            </div>
            <div className={`${style.bottom}`} >
                <div className={`${style.left}`} >
                    <ul>
                        <li><Typography variant='body2' ><Link to='/'>Home</Link></Typography></li>
                        <li><Typography variant='body2' ><Link to='/about'>About</Link></Typography></li>
                        <li><Typography variant='body2' ><Link to='/contact'>Contact</Link></Typography></li>
                        <li><Typography variant='body2' ><Link to='/blog'>Blogs</Link></Typography></li>
                    </ul>
                </div>
                <div className={`${style.mid}`} > </div>
                <div className={`${style.right}`} >
                    <input type="text" placeholder='Search blog' />
                    <span style={{ color: 'whitesmoke' }} ><Magnify color='inherit' /></span>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
