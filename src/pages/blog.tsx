import React, { FC } from 'react';
import { PageProps, graphql } from 'gatsby';
import PageLayout from '../components/PageLayout/PageLayout';
import Seo from '../components/Seo'
import { JsonObjectExpression } from 'typescript';
import { Typography } from '@material-ui/core'

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

const blog: FC<PageProps<querySchema, Props>> = ({ data, path, uri }) => {

    const { nodes } = data.allContentfulBlog;

    return (
        <PageLayout path={uri} >
            <Seo title='Blog' />
            <Typography variant='h2' > ALL BLOGS </Typography>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent:'center',
                margin: '20px auto'
            }} >
                {nodes.map(({ slug, title, category,mainImage }, idx) => (
                    <div key={idx} style={{
                        margin:'20px'
                    }}>
                        <div style={{}} ><img style={{width:'350px'}} src={mainImage.fluid.src} /></div>
                        <Typography variant='subtitle1' ><a href={`${path}${category[0].name}/${slug}`}>{title}</a></Typography>
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

export default blog;