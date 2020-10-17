exports.createPages = async ({ actions, graphql }) => {
    const urlNameSpace = '/blog'

    const {data} = await graphql(`
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
    `)
    const { nodes } = data.allContentfulBlog;

    nodes.map(({ title, slug, mainImage, content, category }) => {
        const blogCategory = category[0].name
        actions.createPage({
            path: `${urlNameSpace}/${blogCategory[0].toUpperCase()+blogCategory.slice(1)}/${slug}`,
            component: require.resolve('./src/templates/BlogPost.tsx'),
            context: {
                title,
                imgSrc: mainImage.fluid.src,
                content: content.json,
                category: blogCategory
            }
        })
    });


}