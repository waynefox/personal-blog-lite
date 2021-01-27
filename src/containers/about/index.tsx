import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import SocialProfile from '../../components/social-profile/social-profile';
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoLinkedin,
} from 'react-icons/io';
import {
  AboutWrapper,
  AboutImage,
  AboutPageTitle,
  AboutDetails,
  SocialProfiles,
} from './style';

const SocialLinks = [
  {
    icon: <IoLogoTwitter />,
    url: 'https://twitter.com/waynefox_',
    tooltip: 'Twitter',
  },
  {
    icon: <IoLogoGithub />,
    url: 'https://github.com/waynefox',
    tooltip: 'Github',
  },
  {
    icon: <IoLogoLinkedin />,
    url: 'https://www.linkedin.com/in/waynefoxdev/',
    tooltip: 'LinkedIn',
  },
];

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/about.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1770, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `);

  return (
    <AboutWrapper>
      <AboutPageTitle>
        <h2>About Meeeeee</h2>
        <p>
        Hey there, I'm Wayne, a father husband and as your here you probably know im a JavaScript and React JS Developer, Nice to meet you.
        </p>
      </AboutPageTitle>

      <AboutImage>
        <Image fluid={Data.avatar.childImageSharp.fluid} alt="author" />
      </AboutImage>

      <AboutDetails>
        <h2>A bit more about me</h2>
        <p>
          This should be a paragraph about me and you can find me in
          <br/>
          src  containers  about  index.tsx
        </p>

        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </AboutDetails>
    </AboutWrapper>
  );
};

export default About;
