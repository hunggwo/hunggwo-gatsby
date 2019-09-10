import React from "react"
import { Link, graphql } from "gatsby"




import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({data}) => {
  console.log(data);
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>{data.allMarkdownRemark.edges.map}</h1>
      <Link to="/">Go back to the homepage</Link>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <p>{node.html}</p>
      ))}
      
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          frontmatter {
            title
            Title
            Type
          }
        }
      }
    }
  }
`

export default SecondPage
