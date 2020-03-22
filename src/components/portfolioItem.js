import './portfolioItem.css';

import PropTypes from 'prop-types';
import React from 'react';

const PortfolioItem = ({ img, alt, title }) => (
  <section className="portfolio-item">
    <img src={img} alt={alt}></img>
    <div className="portfolio-item__hover-background"></div>
    <div className="portfolio-item__triangle"></div>
    <figcaption className="portfolio-item__title">{title}</figcaption>
  </section>
)

PortfolioItem.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
}

PortfolioItem.defaultProps = {
  img: "https://via.placeholder.com/300",
  alt: "Image Alt",
  title: "Title that is so long it might wrap on two lines",
}

export default PortfolioItem
