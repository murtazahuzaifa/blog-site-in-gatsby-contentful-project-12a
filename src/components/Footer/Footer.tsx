import React, { FC } from 'react';
import { Facebook, Instagram, Gmail, Pinterest, Twitter } from 'mdi-material-ui';
import { Typography, IconButton } from '@material-ui/core'
import { useStaticQuery, graphql } from 'gatsby';
import style from './Footer.module.css';
import {Logo} from '../Images';

export interface Props { };



const Footer: FC<Props> = () => {

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
        <div className={`${style.footer}`}>
            <div className={`${style.logo}`} >
                <Logo width='120px' />
            </div>
            <div className={`${style.about}`} >
                <Typography variant='h6' >ABOUT US</Typography>
                <Typography variant='body2'  >
                    DIY is to aware people about the benefits of useful wastes and hidden talent.
                    DIY has its place. This is especially true when it comes to money-related matters 
                    You can explore the best material to read about the different diy home projects. 
                </Typography>
            </div>
            <div className={`${style.followLinks}`} >
                <Typography variant='h6' >FOLLOW US</Typography>
                <div>
                    <span><IconButton><Facebook /></IconButton></span>
                    <span><IconButton><Instagram /></IconButton></span>
                    <span><IconButton><Gmail /></IconButton></span>
                    <span><IconButton><Pinterest /></IconButton></span>
                    <span><IconButton><Twitter /></IconButton></span>
                </div>
            </div>
        </div>
    )
};

export default Footer;