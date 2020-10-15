exports.createPages = async ({ actions, graphql }) => {
    const urlNameSpace = '/blog'

    const {data} = await graphql(`
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
    `)
    const { nodes } = data.allContentfulPosts;

    nodes.map(({ title, slug, mainImage, content }) => {
        actions.createPage({
            path: `${urlNameSpace}/${slug}`,
            component: require.resolve('./src/templates/BlogPost.tsx'),
            context: {
                title,
                imgSrc: mainImage.fluid.src,
                content: content.json,
            }
        })
    });


}