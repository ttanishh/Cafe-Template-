import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import ReserveTable from './ReserveTable';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReserveTableOpen, setIsReserveTableOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex justify-between items-center px-6 py-4 border-b border-border bg-background">
        <div className="text-xl font-bold">My Café</div>
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-base font-medium transition-colors duration-200 ${
                isActive(item.path)
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={() => setIsReserveTableOpen(true)}
            className="btn-coffee px-4 py-2 rounded-md hover:scale-105 transform transition-all duration-300"
          >
            <span className="flex items-center justify-center gap-2">
              Reserve Table <span className="animate-bounce">✨</span>
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden px-4 py-3 flex justify-between items-center border-b border-border bg-background">
        <span className="text-xl font-bold">My Café</span>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-lg focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-primary bg-secondary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <button
                onClick={() => {
                  setIsReserveTableOpen(true);
                  setIsMenuOpen(false);
                }}
                className="btn-coffee w-full hover:scale-105 transform transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  Reserve Table <span className="animate-bounce">✨</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reserve Table Modal */}
      {isReserveTableOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-background p-6 rounded-xl shadow-lg max-w-md w-full relative">
            <button
              onClick={() => setIsReserveTableOpen(false)}
              className="absolute top-3 right-3 text-xl text-muted-foreground hover:text-foreground"
            >
              ✖
            </button>
            <ReserveTable isOpen={isReserveTableOpen} onClose={() => setIsReserveTableOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;