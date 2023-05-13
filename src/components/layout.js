import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Navbar from "./navbar";

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

  return (
    <div className="w-full h-full mx-auto font-sans flex flex-col bg-black text-white">
      <Navbar title={data.site.siteMetadata.title}></Navbar>
      <main>
        <h1 className="text-cyan-200">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
