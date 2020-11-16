import React, { FC, useEffect } from 'react';
import { PageProps, graphql } from 'gatsby';
import PageLayout from '../components/PageLayout/PageLayout';
import { Typography } from '@material-ui/core'
import { JsonObjectExpression } from 'typescript';
import Seo from '../components/Seo';
interface Props { }

type querySchema = {
    allContentfulBlog: {
        nodes: {
            title: string,
            slug: string,
            mainImage: {
                fluid: {
                    src: string,
                },
            },
            category: { name: string }[]
            content: {
                json: JsonObjectExpression
            },
        }[],
    },
}

const Index: FC<PageProps<querySchema, Props>> = ({ data, pageResources }) => {

    const { nodes } = data.allContentfulBlog;
    let path = '/';
    useEffect(()=>{
        path = pageResources.page.path
    })
    return (
        <PageLayout path={path}>
            <Seo title='Home' />
            <Typography variant='h5' > Recent Blogs </Typography>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                margin: '20px auto'
            }} >
                {nodes.map(({ slug, title, category, mainImage }, idx) => (
                    <div key={idx} style={{
                        margin: '20px'
                    }}>
                        <div style={{}} ><img style={{ width: '350px' }} src={mainImage.fluid.src} /></div>
                        <Typography variant='subtitle1' ><a href={`blog/${category[0].name}/${slug}`}>{title}</a></Typography>
                    </div>
                ))}
            </div>
        </PageLayout>
    )
}

export const query = graphql`
{
            allContentfulBlog {
                nodes {
                    title
                    slug
                    mainImage {
                        fluid {
                            src
                        }
                    }
                    category {
                        name
                    }
                    content {
                        json
                    }
                }
            }
        }
`

export default Index;