import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Index({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <ReactMarkdown>{data.graphCmsMarketingPage.mainContent}</ReactMarkdown>
    </Layout>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    graphCmsMarketingPage(slug: { eq: "home" }) {
      mainContent
      slug
    }
  }
`
