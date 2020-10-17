import React, { FC, CSSProperties } from 'react';
import { Link } from 'gatsby';
import { Typography, Breadcrumbs } from '@material-ui/core';
import { strToTitle } from '../utils';

interface Prop {
    path: string
}

const linkStyle:CSSProperties = {
    textDecoration: 'none',
    color:'grey'
}

const SimpleBreadcrumbs: FC<Prop> = ({ path }) => {
    let pathPiece = path.split('/')
    pathPiece = pathPiece.filter((path)=> path!=='' ) // removing empty item

    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" to="/" style={linkStyle} >Home</Link>
            {pathPiece.map((link, idx) => {
                if (idx+1 === pathPiece.length) {
                    return <Typography key={idx} color="textPrimary">{strToTitle(link)}</Typography>
                }
                return <Link style={linkStyle} to={"/"+pathPiece.slice(0,idx+1).join('/')} key={idx} >{link}</Link>
            })}

        </Breadcrumbs>
    );
}

export default SimpleBreadcrumbs