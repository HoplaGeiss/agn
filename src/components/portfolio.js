import './portfolio.css';

import React from 'react';

import PortfolioItem from './portfolioItem';

const Portfolio = () => (
  <div className="portfolio-wrapper">
    <PortfolioItem></PortfolioItem>
    <PortfolioItem></PortfolioItem>
    <PortfolioItem></PortfolioItem>
  </div>
)

export default Portfolio
