import React, { FC } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
export interface Props { };

const PageLayout: FC<Props> = ({ children }) => {
    return (
        <div className={`${'pageLayout'}`} >
            <NavBar />
            {children}
            <Footer/>
        </div>
    )
}

export default PageLayout;
