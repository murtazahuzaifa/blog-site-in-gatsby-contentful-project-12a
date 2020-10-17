import React, { FC } from 'react';
import {PageProps} from 'gatsby';
import PageLayout from '../components/PageLayout/PageLayout';
import Seo from '../components/Seo'
interface Props { }

const Index: FC<PageProps<Props>> = ({pageResources})=>{
    return(
        <PageLayout path={pageResources.page.path}>
            <Seo title='Home' />
            <h1>This is Home page</h1>
        </PageLayout>
    )
}

export default Index;