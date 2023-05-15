import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const title = "About Me";

const AboutPage = () => {
  return (
    <Layout pageTitle={title}>
      <p>Hi there! My name is Siegfried, but you can just call me Ziggy.</p>
    </Layout>
  );
};

export const Head = () => <Seo title={title} />;

export default AboutPage;
