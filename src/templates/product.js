import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({data}) => {
  console.log(data);
  const node = data.markdownRemark;

  return (
    <Layout>
      <SEO title={`弘國廣告 - node.frontmatter.title`} />
      <Link to="/">⃪ 回首頁</Link>
      <hr></hr>
      <div>
        <div style={{
          padding: `0 7px`
        }}>
          <h3>{node.frontmatter.title}</h3>
          <p>{node.frontmatter.desc}</p>
          <p><small>(點擊圖片可放大檢視)</small></p>
        </div>
       
        <div className={`row`}>
          {[...Array(node.frontmatter.imgcount).keys()].map((i) => (
            <a class="col-md-4 col-sm-6" data-lightbox={`image-${i+1}`} href={`/photos/${node.frontmatter.title}/${i+1}.jpg`}>
              <img alt={`node.frontmatter.title-${i+1}.jpg`} class="shadow p-1 m-1 bg-white rounded" src={`/photos/${node.frontmatter.title}/${i+1}.jpg`} />
            </a>
          ))}
        </div>
        
      </div>
      
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        desc
        imgcount
      }
    }
  }
`

export default SecondPage
