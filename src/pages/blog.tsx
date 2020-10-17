import React, { FC } from 'react';
import { PageProps, graphql } from 'gatsby';
import PageLayout from '../components/PageLayout/PageLayout';
import Seo from '../components/Seo'
import { JsonObjectExpression } from 'typescript';

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
            <h1> ALL BLOGS </h1>
            <ul>
                {nodes.map(({ slug, title, category }, idx) => (
                    <li key={idx}><a href={`${path}${category[0].name}/${slug}`}>{title}</a></li>
                ))}
            </ul>
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