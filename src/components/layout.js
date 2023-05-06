import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site(id: {}) {
        siteMetadata {
          title
        }
      }
    }
  `);

  const navLinkItem = "pr-8"
  const navLinkText = "text-[white]"

  return (
    <div className="mx-auto max-w-500 font-sans justify-center bg-black text-white h-screen">
      <header className="text-5xl font-bold font-sans text-blue-400">{data.site.siteMetadata.title}</header>
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
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className="text-cyan-200">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
