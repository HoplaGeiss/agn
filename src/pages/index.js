import React from 'react';

import AgnCarousel from '../components/carousel';
import Intro from '../components/intro';
import Portfolio from '../components/portfolio';
import SEO from '../components/seo';

const IndexPage = () => (
  <main>
    <SEO title="Home" />
    <AgnCarousel></AgnCarousel>
    <Intro></Intro>
    <Portfolio></Portfolio>
  </main>
)

export default IndexPage
