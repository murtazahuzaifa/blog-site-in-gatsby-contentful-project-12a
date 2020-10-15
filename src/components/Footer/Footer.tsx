import React, { FC } from 'react';
import {Facebook, Instagram, Gmail, Pinterest, Twitter} from 'mdi-material-ui';
import {Typography} from '@material-ui/core'
import {useStaticQuery, graphql} from 'gatsby';
import {StaticQueryType} from '../../typedefs';

export interface Props { };



const Footer: FC<Props> = () => {

    const { site } = useStaticQuery<StaticQueryType>(
        graphql`
          query {
            site {
              siteMetadata {
                logoSrc
              }
            }
          }
        `
      )

    return (
        <div className={`${'footer'}`}>
            <div>
                <img width='100px' src={site.siteMetadata.logoSrc} alt="logo" />
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