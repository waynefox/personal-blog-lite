import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import About from '../containers/about';

type AboutPageProps = {};

const AboutPage: React.FunctionComponent<AboutPageProps> = (props) => {
  return (
    <Layout>
      <SEO
        title="About Me"
        description="I'm Wayne Fox a JavaScript and ReactJS Developer bsaed in the UK"
      />

      <About />
    </Layout>
  );
};

export default AboutPage;
