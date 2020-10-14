import React, { FC }  from 'react';
import {PageProps} from 'gatsby';
import PageLayout from '../components/PageLayout/PageLayout';
import Seo from '../components/Seo'

interface Props { }

const contact: FC<PageProps<Props>> = ({}) => {
    return (
        <PageLayout>
            <Seo title='Contact' />
            <h1> This is Contact page </h1>
            
        </PageLayout>
    )
}

export default contact;