import React, { FC } from 'react';
import {Facebook, Instagram, Gmail, Pinterest, Twitter} from 'mdi-material-ui';
import {Typography} from '@material-ui/core'

export interface Props { };

const Footer: FC<Props> = () => {
    return (
        <div className={`${'footer'}`}>
            <div>
                <img width='100px' src="https://organicread.com/wp-content/uploads/2020/02/organic-read-retina-logo-for-wp.png" alt="logo" />
            </div>
            <div>
                <Typography variant='h6' >ABOUT US</Typography>
                <Typography variant='body2'  >
                    Organic Read is to aware people of the organic lifestyle and its benefits. You can explore the best material to read about the importance of organic food, healthcare, products and much more. Kudos for you to be here!
                </Typography>
            </div>
            <div>
                <Typography variant='h6' >FOLLOW US</Typography>
                <div>
                    <span><Facebook/></span>
                    <span><Instagram/></span>
                    <span><Gmail/></span>
                    <span><Pinterest/></span>
                    <span><Twitter/></span>
                </div>
            </div>
        </div>
    )
};

export default Footer;