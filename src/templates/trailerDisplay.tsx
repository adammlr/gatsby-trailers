import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function TrailerDisplay({ data }) {
  const image = getImage(data.graphCmsModel.coverImage)

  // Client-side Runtime Data Fetching
  const [blogData, setBlogData] = useState()
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/1`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setBlogData(resultData)
      })
  }, [])

  return (
    <Layout>
      <SEO title={data.graphCmsModel.name} />
      <h1>{data.graphCmsModel.name}</h1>
      <div>
        <GatsbyImage image={image} alt={data.graphCmsModel.name} />
      </div>
      <div style={{ whiteSpace: "pre-wrap" }}>
        {data.graphCmsModel.marketingText}
      </div>
      <h3>Runtime Data</h3>
      <div>{blogData?.title}</div>
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
