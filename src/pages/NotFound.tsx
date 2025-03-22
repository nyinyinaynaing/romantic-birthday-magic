
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Heart } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-radial from-romantic-50 to-white px-6">
      <div className="text-center max-w-md">
        <Heart className="w-12 h-12 text-romantic-500 mx-auto mb-6 animate-pulse-subtle" />
        <h1 className="text-4xl font-playfair font-medium text-romantic-950 mb-4">Page Not Found</h1>
        <p className="text-xl text-romantic-700 mb-8">
          Oops! This page seems to have wandered off. Let's get back to our special celebration.
        </p>
        <Link
          to="/"
          className="glass inline-block px-8 py-4 rounded-full text-romantic-600 font-medium shadow-lg transition-all hover:shadow-xl hover:text-romantic-700 hover:scale-105"
        >
          Return to Our Celebration
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
