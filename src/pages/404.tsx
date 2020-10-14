import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import PageLayout from '../components/PageLayout/PageLayout';
import Seo from '../components/Seo'
interface Props { }

const NotFoundPage: FC<PageProps<Props>> = () => {
    return (
        <PageLayout>
            <Seo title='Page not found' />
            <div>
                <h1>NOT FOUND</h1>
                <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            </div>
        </PageLayout>
    )
}

export default NotFoundPage;