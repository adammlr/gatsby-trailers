const Promise = require("bluebird")
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve("./src/templates/trailerDisplay.tsx")
    resolve(
      graphql(
        `
          {
            allGraphCmsModel {
              nodes {
                name
                urlSlug
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const trailerModels = result.data.allGraphCmsModel.nodes
        trailerModels.forEach(model => {
          createPage({
            path: `/trailers/${model.urlSlug}/`,
            component: blogPost,
            context: {
              slug: model.urlSlug,
            },
          })
        })
      })
    )
  })
}
