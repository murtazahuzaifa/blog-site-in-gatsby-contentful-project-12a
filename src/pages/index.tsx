import React, { FC } from 'react';
import {PageProps} from 'gatsby';
import PageLayout from '../components/PageLayout';
interface Props { }

const Index: FC<PageProps<Props>> = ()=>{
    return(
        <PageLayout>
            <h1>hello from gatsby</h1>
        </PageLayout>
    )
}

export default Index;