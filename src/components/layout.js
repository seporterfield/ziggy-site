import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Navbar from "./navbar";
import ZiggyFooter from "./footer";
import { Box } from "@chakra-ui/react";

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
    <Box
      minH="100vh"
      mx="auto"
      fontFamily="sans-serif"
      display="flex"
      flexDir="column"
      bg="black"
      color="white"
    >
      <Navbar title={data.site.siteMetadata.title}></Navbar>
      <Box flex="1" p="4" bg="blackAlpha.100">
        <h1 className="text-blue-300">{pageTitle}</h1>
        <Box flex="1" overflow="auto">
          {children}
        </Box>
      </Box>
      <ZiggyFooter></ZiggyFooter>
    </Box>
  );
};

export default Layout;
