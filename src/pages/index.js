import React from 'react';

import AgnCarousel from '../components/landing/carousel';
import Intro from '../components/landing/intro';
import Portfolio from '../components/landing/portfolio';
import SEO from '../components/shared/seo';

const IndexPage = () => (
  <main>
    <SEO title="Home" />
    <AgnCarousel></AgnCarousel>
    <Intro></Intro>
    <Portfolio></Portfolio>
  </main>
)

export default IndexPage
