import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { Box, Heading, Link } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const components = {
  a: ({ node, ...props }) => {
    if (props.href.startsWith("http")) {
      return (
        <Link href={props.href} isExternal>
          {props.children} <ExternalLinkIcon mx="2px" />
        </Link>
      );
    }
    return <Link {...props} />;
  },
  // Add more custom components as needed
};

const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <Box
        display="flex"
        flexDirection="column"
        maxW="800px"
        mx="auto"
        justifyContent="center"
      >
        <Heading size="lg" mb="4">
          {data.mdx.frontmatter.title}
        </Heading>
        <div className="w-full h-full">
          <GatsbyImage
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
            className="h-full object-contain"
          />
        </div>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        maxW="800px"
        mx="auto"
        justifyContent="center"
        bg="black"
        borderRadius="lg"
        boxShadow="lg"
        className="markdown"
      >
        <MDXProvider components={components}>{children}</MDXProvider>
      </Box>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;
