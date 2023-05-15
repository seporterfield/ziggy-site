import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import InteractiveDashboard from "../components/interactive_dashboard";
import PostLink from "../components/postlink";
import Seo from "../components/seo";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog">
      <InteractiveDashboard></InteractiveDashboard>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <PostLink
            slug={node.frontmatter.slug}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
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
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="blog" />;

export default BlogPage;
