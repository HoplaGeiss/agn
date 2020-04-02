import './intro.scss';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "images" }, name: { eq: "profile" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="intro-wrapper">
      <Img fluid={data.file.childImageSharp.fluid} className="img-round" />
      <section className="bio">
        <p>Dear visitor</p>
        <p>
          I am Agnieszka. My background is in mechanical engineering. In my day
          job, I have worked on some pretty cool projects. In the past I
          desgined engines for Formula 1 and for Formula E. Currently I am
          designing satellites for the European Space Agency. However my passion
          is photopgrahy and especially wedding photography
        </p>
      </section>
    </div>
  )
}

export default Intro
