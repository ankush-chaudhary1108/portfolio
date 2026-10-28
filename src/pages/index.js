import React from 'react';
import Layout from 'layouts/index';
import Hero from 'components/Hero';
import About from 'components/About';
import Projects from 'components/Projects';
import ContactLinks from 'components/ContactLinks';
import projects from 'content/projects';
import statements from 'content/about-me';
const Home = () => <Layout><React.Fragment>
  <Hero /><About statements={statements} />
  <h2 id="projects" className="section-title">Projects &amp; Experience</h2><Projects projects={projects} /><div className="background" />
  <h2 id="certificates" className="section-title">Certificates &amp; Activities</h2>
  <div className="certificates-container">
    <a className="certificate-card" href="/certificates/drone-rush.pdf" target="_blank" rel="noopener noreferrer"><span className="certificate-tag">graVITas 2026</span><h3>DRONE RUSH</h3><p>Participation certificate · VIT Vellore</p><span className="certificate-open">View certificate ↗</span></a>
    <a className="certificate-card" href="/certificates/starparty.pdf" target="_blank" rel="noopener noreferrer"><span className="certificate-tag">graVITas 2026</span><h3>StarParty</h3><p>Participation certificate · VIT Vellore</p><span className="certificate-open">View certificate ↗</span></a>
    <a className="certificate-card" href="/certificates/clueminati-4.pdf" target="_blank" rel="noopener noreferrer"><span className="certificate-tag">graVITas 2026</span><h3>Clueminati 4.0</h3><p>Participation certificate · VIT Vellore</p><span className="certificate-open">View certificate ↗</span></a>
  </div>
  <h2 id="contact" className="section-title">Contact</h2><p className="contact-note">Feel free to reach out by email or through my profiles below.</p><ContactLinks />
</React.Fragment></Layout>;
export default Home;
export const Head = () => <><title>Ankush Chaudhary | Portfolio</title><meta name="description" content="Portfolio of Ankush Chaudhary, Computer Science student at VIT Vellore." /><meta name="keywords" content="Ankush Chaudhary, portfolio, VIT Vellore, computer science" /></>;
