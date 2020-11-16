import React, { FC, ReactElement } from 'react';
import { PageProps } from 'gatsby';
import PageLayout from '../components/PageLayout/PageLayout';
import Seo from '../components/Seo'
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document } from '@contentful/rich-text-types'
const style = require('./BlogPost.module.css');
// import Img from 'gatsby-image'

interface Props {
    title: string, slug: string, imgSrc: string, content: Document, category: string
}

// https://www.contentfulcommunity.com/t/no-embedded-images-with-rich-text-but-would-like-to-use-gatsby-image/3499
const options: Options = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node): ReactElement => {
            return (
                <div className = 'content-img' style={{ padding:'50px' }} ><img
                    key={node.data.target.fields.file['en-US'].url}
                    src={node.data.target.fields.file['en-US'].url}
                    title={node.data.target.fields.title['en-US']}
                    // style={{ width:'80%' }}
                /></div>
            )
        },
        [BLOCKS.HEADING_2]: (node, children): ReactElement => (
            <div><h2>{children}</h2></div>
        ),
        [BLOCKS.PARAGRAPH]: (node, children): ReactElement => (
            <div><p>{children}</p></div>
        ),
        [BLOCKS.UL_LIST]: (node, children): ReactElement => (
            <div><ul>{children}</ul></div>
        ),
        [BLOCKS.OL_LIST]: (node, children): ReactElement => (
            <div><ol>{children}</ol></div>
        ),

    }
}

const BlogPost: FC<PageProps<{}, Props>> = ({ pageContext, pageResources, uri }) => {
    const { title, imgSrc, content, category } = pageContext
    return (
        // <PageLayout path={`${pageResources.page.path.split('/').slice(0, -1).join('/')}/${title}`} >
        <PageLayout path={uri} >
            <Seo title='Contact' />
            <div className={`${style.container}`} >
                <h1>{title}</h1>
                <br/>
                <div className={`${style.blogImg}`} ><img src={imgSrc} alt={title} style={{ maxWidth: '700px' }} /></div>
                <br/>
                <div className={`${style.content}`} >
                    {documentToReactComponents(content, options)}
                </div>
            </div>
        </PageLayout>
    )
}

export default BlogPost;