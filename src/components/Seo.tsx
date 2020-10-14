import React, { FC } from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import {MetaTagType, LinkTagType} from '../typedefs';

export interface Props {
  description?: string,
  lang?: string,
  meta?: MetaTagType
  link?: LinkTagType
  title: string,
}

const SEO: FC<Props> = ({ description, lang='en', meta=[], link=[], title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}

      link={[
        { rel: 'icon', href: "https://organicread.com/wp-content/uploads/2020/02/organic-read-favicon-300x300.png" },
        ...link      
      ]}

      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        ...meta
      ]}
    />
  )
}

export default SEO
