import './carousel.css';

import { Carousel } from 'antd';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import CarouselItem from './carouselItem';

const AgnCarousel = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "carousel" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const CarouselItems = data.allFile.edges.map(edge => {
    return <CarouselItem img={edge.node.childImageSharp}></CarouselItem>
  })

  return <Carousel autoplay>{CarouselItems}</Carousel>
}

export default AgnCarousel
