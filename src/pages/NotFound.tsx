import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '@/components/Navbar';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center px-4">
          <div className="text-8xl mb-6">☕</div>
          <h1 className="font-serif text-6xl font-bold text-primary mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Oops! This page seems to have gone for a coffee break
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-coffee">
              Return to Home
            </Link>
            <Link to="/menu" className="btn-gold">
              Browse Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
