export type MetaTagType = React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>[] | undefined

export type LinkTagType = React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>[] | undefined

export type StaticQueryType = {
    site: {
        siteMetadata: {
            title?: string,
            logoSrc?: string,
            description?: string,
            author?: string
        }
    }
}