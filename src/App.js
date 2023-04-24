import './App.css'; // Importing the styles for the App component
import FeatureOne from './components/FeatureOne'; // Importing the FeatureOne component
import Header from './components/Header'; // Importing the Header component
import Hero from './components/Hero'; // Importing the Hero component
import DailyStats from './components/DailyStats'; // Importing the DailyStats component
import { Card } from './components/Card'; // Importing the Card component
import insurance1 from "./assets/insurance1.svg"; // Importing an SVG image
import wallet1 from "./assets/wallet1.svg"; // Importing an SVG image
import profit1 from "./assets/profit1.svg"; // Importing an SVG image
import SocialMediaPromo from './components/SocialMediaPromo'; // Importing the SocialMediaPromo component
import DevSection from './components/DevSection'; // Importing the DevSection component
import { BlogSection } from './components/BlogSection'; // Importing the BlogSection component
import Footer from './components/Footer'; // Importing the Footer component

function App() {
  const features = [
    // An array of objects, each representing a feature
    {
      src: wallet1, // The source URL of the feature image
      title: "Value", // The title of the feature
      description:
        "Swap from your own wallet. Be your own bank. No centralized bridges or wrapping assets", // The description of the feature
    },
    {
      src: profit1,
      title: "Yield",
      description:
        "Provide Liquidity and Earn Yield on your Native Assets with Impermanent Loss Protection",
    },
    {
      src: insurance1,
      title: "Insurance",
      description: "Get Impermanent Loss Protection on your Liquidity Pools",
    },
    {
      src: wallet1,
      title: "Staking",
      description:
        "Earn Yield on your Native Assets with Impermanent Loss Protection",
    },
  ];
  
  return (
    <div className="Home"> {/* The root component */}
    <Header /> {/* The header component */}
    <Hero /> {/* The hero component */}
    <DailyStats /> {/* The daily stats component */}
    <FeatureOne /> {/* The feature one component */}
    <div className='feature-list-container'> {/* The container for the feature list */}
      {
        features.map((feature, index) => { /* Mapping through the features array to render a Card component for each feature */
          return (
          <Card key={index} title={feature.title} imgUrl={feature.src}>
            {<p>{feature.description}</p>}
          </Card>
          )
        })
      }
    </div>
    <SocialMediaPromo /> {/* The social media promo component */}
    <DevSection /> {/* The dev section component */}
    <BlogSection/> {/* The blog section component */}
    <Footer/> {/* The footer component */}
    </div>
  );
}

export default App; // Exporting the App component as the default export.
