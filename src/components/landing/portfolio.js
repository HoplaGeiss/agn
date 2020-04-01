import './portfolio.css';

import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import PortfolioItem from './portfolioItem';

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              title
              cover {
                childImageSharp {
                  fluid(maxWidth: 500, maxHeight: 500, quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const Posts = data.allMarkdownRemark.edges.map(edge => {
    return (
      <PortfolioItem
        key={edge.node.id}
        img={edge.node.frontmatter.cover.childImageSharp}
        title={edge.node.frontmatter.title}
        path={edge.node.frontmatter.path}
      ></PortfolioItem>
    )
  })

  return <div className="portfolio-list">{Posts}</div>
}

export default Portfolio
