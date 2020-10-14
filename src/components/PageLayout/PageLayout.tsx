import React, { FC } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

export interface Props {  };

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
