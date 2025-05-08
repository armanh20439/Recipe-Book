import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
