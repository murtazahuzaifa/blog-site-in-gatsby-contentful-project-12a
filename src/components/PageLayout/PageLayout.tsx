import React, { FC, ReactNode } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
const style = require('./PageLayout.module.css');
import Breadcrumb from '../Breadcrumb';

export interface Props { children?: ReactNode, path: string };

const PageLayout: FC<Props> = ({ children, path }) => {

    return (
        <div className={`${style.pageLayout}`} >
            <NavBar />
            {path === '/' ? null : <div className={`${style.breadcrumb}`} ><Breadcrumb path={path} /></div>}
            <div className={`${style.childContainer}`} >
                {children}
            </div>
            <div></div>
            <Footer />
        </div>
    )
}

export default PageLayout;
