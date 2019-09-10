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
      <Link to="/">⃪ 回首頁</Link>
      <hr></hr>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div>
          <h3>{node.frontmatter.title}</h3>
          <h5>{node.frontmatter.desc}</h5>
          <div className={`row`}>
            {[...Array(node.frontmatter.imgcount).keys()].map((i) => (
              <a class="col-md-4 col-sm-6" data-title="">
                <img class="shadow p-1 m-1 bg-white rounded" src={`/photos/${node.frontmatter.title}/${i+1}.jpg`} />
              </a>
            ))}
          </div>
          
        </div>
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
          frontmatter {
            title
            desc
            imgcount
          }
        }
      }
    }
  }
`

export default SecondPage
