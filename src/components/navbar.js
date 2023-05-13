import * as React from "react";
import { Link } from "gatsby";

const Navbar = ({ title }) => {
  const navLinkItem = "pr-8";
  const navLinkText = "text-[white]";

  return (
    <div>
      <header className="text-5xl font-bold font-sans text-blue-400">
        {title}
      </header>
      <nav>
        <ul className="flex pl-0 list-none">
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/projects" className={navLinkText}>
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
