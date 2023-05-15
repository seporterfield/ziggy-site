import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! My name is Siegfried Porterfield, but you can just call me
        Ziggy.
      </p>
    </Layout>
  );
};

export const Head = () => <Seo title="About Me" />;

export default AboutPage;
