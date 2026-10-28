import React from 'react';
import Typewriter from 'components/Typewriter';
const Hero = () => {
  const handleScroll = e => { e.preventDefault(); document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }); };
  return <div className="hero-container">
    <Typewriter className="hero-title" text="Ankush Chaudhary" />
    <div className="hero-description">I am a Computer Science student at VIT Vellore.<br />I enjoy learning how software works and building practical projects.<br />Take a look at my <a href="#projects" onClick={handleScroll}>work and experience</a> below.</div>
  </div>;
};
export default Hero;
