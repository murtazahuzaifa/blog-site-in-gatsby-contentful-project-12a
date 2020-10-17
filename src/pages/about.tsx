import React, { FC }  from 'react';
import {PageProps} from 'gatsby';
import PageLayout from '../components/PageLayout/PageLayout';
import Seo from '../components/Seo'

interface Props { }

const about: FC<PageProps<Props>> = ({uri}) => {
    console.log(uri)
    return (
        <PageLayout path={uri} >
            <Seo title='About' />
            <h1>This is About page</h1>
            
        </PageLayout>
    )
}

export default about;