import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function TrailerDisplay({ data }) {
  return (
    <Layout>
      <h1>{data.graphCmsModel.name}</h1>
      <div>
        <img src={data.graphCmsModel.coverImage.url} width="400px"></img>
      </div>
    </Layout>
  )
}

//TODO: why doesn't transformation work?
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    graphCmsModel(urlSlug: { eq: $slug }) {
      urlSlug
      name
      coverImage {
        url
      }
    }
  }
`
