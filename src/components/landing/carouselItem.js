import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

const CarouselItem = ({ img }) => (
  <Img className="carousel-item" fluid={img.fluid} />
)

CarouselItem.propTypes = {
  img: PropTypes.any, // TODO - find good type
}

export default CarouselItem
