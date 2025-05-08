const About = () => {
  return (
    <div className="max-w-3xl mx-auto bg-base-100 p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">About Recipe Book</h1>
      <p className="mb-4">
        Recipe Book is a simple web app built with React, Vite, Tailwind CSS (DaisyUI), and the MealDB API. 
        It allows users to browse a variety of meals, view details about each recipe, and explore different meal categories.
      </p>
      <p className="mb-4">
        The project uses modern React tools such as React Router for navigation and custom components for a clean UI.
      </p>
      <p className="mb-4">
        Data is fetched in real-time from <a href="https://www.themealdb.com/" className="link text-blue-500" target="_blank" rel="noreferrer">TheMealDB</a> — a free and open recipe database API.
      </p>
      <p>Happy cooking! 🍽️</p>
    </div>
  );
};

export default About;
