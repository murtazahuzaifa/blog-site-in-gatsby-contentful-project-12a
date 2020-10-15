import React, { FC } from 'react';
import { PageProps, graphql } from 'gatsby';
import PageLayout from '../components/PageLayout/PageLayout';
import Seo from '../components/Seo'
import { JsonObjectExpression } from 'typescript';

interface Props { }

type querySchema = {
    allContentfulPosts: {
        nodes: {
            title: string,
            slug: string,
            mainImage: {
                fluid: {
                    src: string,
                },
            },
            content: {
                json: JsonObjectExpression
            },
        }[],
    },
}

const blog: FC<PageProps<querySchema, Props>> = ({ data, path }) => {

    const { nodes } = data.allContentfulPosts;

    return (
        <PageLayout>
            <Seo title='Blog' />
            <h1> ALL BLOGS </h1>
            <ul>
                {nodes.map(({ slug, title }, idx) => (
                    <li key={idx}><a href={path + slug}>{title}</a></li>
                ))}
            </ul>
        </PageLayout>
    )
}

export const query = graphql`
{
    allContentfulPosts {
        nodes {
        title
        slug
        mainImage {
            fluid {
            src
            }
        }
        content {
            json
        }
        }
    }
}
`

export default blog;