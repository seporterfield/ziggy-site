import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import InteractiveDashboard from "../components/interactive_dashboard";
import PostLink from "../components/postlink";
import Seo from "../components/seo";

const title = "Blog";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle={title}>
      <InteractiveDashboard></InteractiveDashboard>
      <br></br>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <PostLink
            slug={node.frontmatter.slug}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
            image={node.frontmatter.hero_image}
          ></PostLink>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
          slug
          hero_image {
            childImageSharp {
              gatsbyImageData(width: 100)
            }
          }
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title={title} />;

export default BlogPage;
