import React from "react";
import Search from "../assets/icons/search.svg";
import { ReactComponent as TelegramIcon } from "../assets/icons/telegram.svg";
import { ReactComponent as TwitterIcon } from "../assets/icons/twitter.svg";
import { ReactComponent as YoutubeIcon } from "../assets/icons/youtube.svg";
import { ReactComponent as DiscordIcon } from "../assets/icons/discord.svg";
import hero1 from "../assets/hero1.png";

// Component for the hero section of the homepage
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-info-wrap">
      <div className="hero-info-text">
        <h1>
          The <span className="highlighted">Decentralized</span> Cross-Chain
          Exchange
        </h1>
        <p className="hero-info-desription">
          {/* Description of the product */}
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
        </p>
        <div className="search-container">
          <div className="search-input-wrapper">

          {/* Search icon */}
            <img className="search" src={Search} alt="search" />

            {/* Search input */}
            <input className="search-input"></input>
          </div>

          {/* Button to start swapping */}
          <button className="search-btn primary">
            <span className="start-swapping">Start Swapping</span>
          </button>
        </div>

        {/* Links to social media accounts */}
        <div className="social-links-container">
          <div className="social-links">
            <a href="/">
              <TelegramIcon />
            </a>
            <a href="/">
              <TwitterIcon />
            </a>
            <a href="/">
              <YoutubeIcon />
            </a>
            <a href="/">
              <DiscordIcon />
            </a>
          </div>
        </div>
      </div>
      </div> 

      {/* Image of the product */}   
      <div className="hero-image-container">
        <div>
          <img className="hero-image" src={hero1} alt="block" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
