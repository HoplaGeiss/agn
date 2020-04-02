import './post.scss';

import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <div className="posts__image-list">
        {data.allFile.edges.map(({ node }, index) => (
          <Img
            key={index}
            fluid={node.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
            className="posts__image"
          />
        ))}
      </div>
    </div>
  )
}

export const query = graphql`
  query($slug: String!, $absolutePathRegex: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
        absolutePath: { regex: $absolutePathRegex }
      }
    ) {
      totalCount
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
