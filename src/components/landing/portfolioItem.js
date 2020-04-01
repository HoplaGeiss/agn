import './portfolioItem.scss';

import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

const PortfolioItem = ({ img, title, path }) => (
  <Link to={path} className="portfolio-item">
    <Img className="portfolio-item__image" fluid={img.fluid} />
    <div className="portfolio-item__hover-background"></div>
    <div className="portfolio-item__triangle"></div>
    <figcaption className="portfolio-item__title">{title}</figcaption>
  </Link>
)

PortfolioItem.propTypes = {
  img: PropTypes.any, // TODO - find good type
  title: PropTypes.string,
  path: PropTypes.string,
}

PortfolioItem.defaultProps = {
  img: "https://via.placeholder.com/300",
  title: "Title that is so long it might wrap on two lines",
  path: "#",
}

export default PortfolioItem
