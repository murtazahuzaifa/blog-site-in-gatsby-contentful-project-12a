import React, { FC, ReactElement } from 'react';
import { PageProps } from 'gatsby';
import PageLayout from '../components/PageLayout/PageLayout';
import Seo from '../components/Seo'
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types'

interface Props {
    title?: string, slug?: string, imgSrc?: string, content?: any
}

const options: Options = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node): ReactElement => {
            return (
                <img
                    key={node.data.target.fields.file['en-US'].url}
                    src={node.data.target.fields.file['en-US'].url}
                    title={node.data.target.fields.title['en-US']}
                    style={{ width: '100%' }}
                />
            )
        },
    }
}

const BlogPost: FC<PageProps<{}, Props>> = ({ pageContext }) => {
    return (
        <PageLayout>
            <Seo title='Contact' />
            <div>
                <h1>{pageContext?.title}</h1>
                <img src={pageContext?.imgSrc} alt={pageContext?.title} style={{ width: '100%' }} />
                {documentToReactComponents(pageContext?.content, options)}
            </div>
        </PageLayout>
    )
}

export default BlogPost;