const path = require('path')
const Page = path.resolve('./src/components/Page.js')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allFile(filter: { extension: { regex: "/md/" } }, limit: 1000) {
              edges {
                node {
                  id
                  name: sourceInstanceName
                  path: absolutePath
                  remark: childMarkdownRemark {
                    id
                    htmlAst
                    frontmatter {
                		title
                    	path
                    	description
                    	subdescription
	                	fullBleedCoverImage {
	                  		childImageSharp {
								fluid(maxWidth: 2000, maxHeight: 1000) {
									aspectRatio
									src
									srcSet
									sizes
									srcWebp
									srcSetWebp
								}
							}
	                  	}
                    }
                  }
                }
              }
            }
          }
        `
      ).then(({ errors, data }) => {
        if (errors) {
          console.log(errors)
          reject(errors)
        }


        const items = data.allFile.edges
        const posts = items.filter(({ node }) => /pages/.test(node.name)).map(({node}) => {
        	if (!node.remark) return
        	const { path } = node.remark.frontmatter

	        createPage({
	        	path,
	            component: Page,
	            context: {
	            	page: node
            	}
	        })
        })

        // const pages = items.filter(({ node }) => /page/.test(node.name))
        // each(pages, ({ node }) => {
        //   if (!node.remark) return
        //   const { name } = path.parse(node.path)
        //   const PageTemplate = path.resolve(node.path)
        //   createPage({
        //     path: name,
        //     component: PageTemplate,
        //   })
        // })
      })
    )
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components')
      },
    },
  })
}