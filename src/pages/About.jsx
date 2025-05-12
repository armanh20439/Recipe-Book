

export default function About() {
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center px-4 py-16">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl font-bold text-primary">About Recipe Book</h1>
        <p className="text-base-content text-lg">
          Welcome to <strong>Recipe Book</strong> – your go-to destination for delicious, fresh, and easy recipes! Whether you're a beginner in the kitchen or a seasoned home cook, we've got something for everyone.
        </p>
        <p className="text-base-content text-lg">
          From hearty dinners to quick breakfasts, healthy meals to sweet treats, our recipe collection is designed to inspire your next cooking adventure. We aim to make cooking fun, accessible, and exciting for every taste and lifestyle.
        </p>
        
        <div className="divider"></div>
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Recipe Book. All rights reserved.</p>
      </div>
    </div>
  );
}
