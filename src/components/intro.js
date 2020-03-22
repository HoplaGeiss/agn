import './intro.css';

import React from 'react';

const Intro = () => (
  <div className="intro-wrapper">
    <img
      src="https://via.placeholder.com/300"
      alt="Agnieszka"
      className="img-round"
    ></img>
    <section className="bio">
      <p>Dear visitor</p>
      <p>
        I am Agnieszka. My background is in mechanical engineering. In my day
        job, I have worked on some pretty cool projects. In the past I desgined
        engines for Formula 1 and for Formula E. Currently I am designing
        satellites for the European Space Agency. However my passion is
        photopgrahy and especially wedding photography
      </p>
    </section>
  </div>
)

export default Intro
