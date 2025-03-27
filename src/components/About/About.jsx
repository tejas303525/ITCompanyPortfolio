import React, { Component } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./style.css";

class About extends Component {
  constructor() {
    super();
    this.state = {
      percentage: 75,
      showNavbar: false, // State to toggle navbar visibility
    };
  }

  toggleNavbar = () => {
    this.setState({ showNavbar: !this.state.showNavbar });
  };

  render() {
    return (
      <section className="about__container">
        <div className="container">
          <div>
            <h1>Advance Innovation For IT Solutions</h1>
            <p className="text">
            At Dora Infotech, we transform challenges into opportunities through cutting-edge IT solutions. Our team of experts is dedicated to delivering innovative strategies that drive efficiency, security, and growth. Whether it's streamlining operations or future-proofing your business, we bring technology and expertise together to help you stay ahead in the digital era.            </p>
            <div className="about__buttons">
              <button className="btn btn-primary">Want to know more?</button>
              <a href="#services">
                <span>Our Services</span>
                <AiOutlineArrowDown />
              </a>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div className="about__image">
              <img
                src="https://st4.depositphotos.com/17586788/i/600/depositphotos_247586928-stock-photo-a-successful-business-girl-in.jpg"
                alt="about"
              />
            </div>
            <div className="about__progress">
              <div className="progress_bar">
                <CircularProgressbar
                  value={this.state.percentage}
                  text={`${this.state.percentage}%`}
                />
              </div>
              <h4>
                Business Growth
                <br />
                <small>Level is high</small>
              </h4>
            </div>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button className="hide__button" onClick={this.toggleNavbar}>
          ☰ {/* This is a hamburger icon */}
        </button>

        {/* The navigation menu */}
        <div className={`links ${this.state.showNavbar ? "active" : ""}`}>
          {/* Add your navigation items here */}
        </div>
      </section>
    );
  }
}

export default About;
