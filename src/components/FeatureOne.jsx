import React from "react";
import TokenCard from "./TokenCard";

// Define a component called FeatureOne
const FeatureOne = () => {
  // Define an array called tokens with two elements
  const tokens = ["0x", "afrix"];

  // Return the JSX code for the FeatureOne component
  return (
    <div className="feature-container">
      <div className="swap-token-container">
        <div className="tokens-container">
          {/* Use the map function to render TokenCard components for each token in the tokens array */}
          {tokens.map((token, index) => {
            return <TokenCard id={token} />;
          })}
        </div>
        {/* Render a button with the text "swap" */}
        <div className="btn-container">
            <button className="primary">swap</button>
        </div>
      </div>
      <div className="feature-description">
        <div className="feature-decription-title">
          {/* Render a heading with the text "Swap Any Token, Any Chain" */}
          <h1>
            <span className="highlighted">Swap</span> Any Token, Any Chain
          </h1>
        </div>
        {/* Render a paragraph with some text */}
        <p className="feature-description-paragraph">
          We&#39;ve created TokSwap to help you make cross-chain swaps in just
          few clicks. You'll be able to easily convert your coins from one
          blockchain to another, or trade them for other cryptocurrencies and
          token
        </p>
        {/* Render a button with the text "Start Swapping" */}
        <div className="btn-container"></div>
        <button>
            <span>Start Swapping</span>
        </button>
      </div>
    </div>
  );
};

// Export the FeatureOne component as the default export of this module
export default FeatureOne;
