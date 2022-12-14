import React from 'react';
import './about.css';
import ABOUTME from '../../assets/ABOUTME.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ABOUTME} alt="About" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>Fresh out of Ironhack's Web Development Bootcamp</small>
            </article>
            <article className="about-card">
              <FiUsers className="about-icon" />
              <h5>Ready to Connect</h5>
              <small>
                Looking to network and get my first job in the industry
              </small>
            </article>
            <article className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>Three completed projects at Ironhack</small>
            </article>
          </div>

          <p>
            Hello there! My name is Umar Bermejo, I started programming in
            January 2022 when I joined Ironhack's Bootcamp. Since the I've loved
            every new aspect of this field. I'm a person that adapts in
            collaborative environments and that is able to stay focused and
            goal-oriented. I'm eager to start my career as a Web Developer and
            look forward to growing and learning more everyday.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
