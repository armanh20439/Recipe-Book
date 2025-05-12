import { Link } from "react-router-dom";
import Banner from "./Banner";
import NewRecipe from "./NewRecipe";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <div >
      
      <Banner></Banner>
      <NewRecipe></NewRecipe>
      <HeroSection></HeroSection>
    </div>
  );
};

export default Home;
