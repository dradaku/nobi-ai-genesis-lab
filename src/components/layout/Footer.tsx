
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card mt-20 py-12 border-t border-border/40">
      <div className="nobi-content-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-nobi-gradient flex items-center justify-center">
                <span className="font-bold text-white text-xl">N</span>
              </div>
              <span className="font-montserrat font-bold text-xl">
                <span className="nobi-gradient-text">Nobi</span> AI
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Building generational wealth as a creator with Zora coins
            </p>
            <p className="mt-4 text-muted-foreground text-sm">
              © {new Date().getFullYear()} Nobi AI. All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/create"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  Create
                </Link>
              </li>
              <li>
                <Link
                  to="/learn"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  Learn
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://zora.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition flex items-center"
                >
                  Zora
                </a>
              </li>
              <li>
                <a
                  href="https://coins.zora.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition flex items-center"
                >
                  Zora Coins
                </a>
              </li>
              <li>
                <a
                  href="https://base.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition flex items-center"
                >
                  Base
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
