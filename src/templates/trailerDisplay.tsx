import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

export default function TrailerDisplay({ data }) {
  const image = getImage(data.graphCmsModel.coverImage)

  return (
    <Layout>
      <h1>{data.graphCmsModel.name}</h1>
      <div>
        <GatsbyImage image={image} alt={data.graphCmsModel.name} />
      </div>
      <div style={{ whiteSpace: "pre-wrap" }}>
        {data.graphCmsModel.marketingText}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    graphCmsModel(urlSlug: { eq: $slug }) {
      urlSlug
      name
      marketingText
      coverImage {
        gatsbyImageData(width: 600)
      }
    }
  }
`
