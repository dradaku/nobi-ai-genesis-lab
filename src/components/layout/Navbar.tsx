
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40">
      <div className="nobi-content-container">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-nobi-gradient flex items-center justify-center">
              <span className="font-bold text-white text-xl">N</span>
            </div>
            <span className="font-montserrat font-bold text-xl">
              <span className="nobi-gradient-text">Nobi</span> AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/create"
              className="font-medium text-foreground hover:text-secondary transition"
            >
              Create
            </Link>
            <Link
              to="/learn"
              className="font-medium text-foreground hover:text-secondary transition"
            >
              Learn
            </Link>
            <Link
              to="/about"
              className="font-medium text-foreground hover:text-secondary transition"
            >
              About
            </Link>
            <Button className="nobi-button-primary">Start Creating</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 pb-6 space-y-4 flex flex-col">
            <Link
              to="/create"
              className="font-medium text-foreground hover:text-secondary transition px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Create
            </Link>
            <Link
              to="/learn"
              className="font-medium text-foreground hover:text-secondary transition px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Learn
            </Link>
            <Link
              to="/about"
              className="font-medium text-foreground hover:text-secondary transition px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Button className="nobi-button-primary w-full">Start Creating</Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
