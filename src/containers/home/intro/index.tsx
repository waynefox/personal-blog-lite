import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import SocialProfile from '../../../components/social-profile/social-profile';
import {
  IntroWrapper,
  IntroImage,
  IntroTitle,
  Desciption,
  IntroInfo,
} from './style';
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoLinkedin,
  
} from 'react-icons/io';

type IntroProps = {};

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

const Intro: React.FunctionComponent<IntroProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/author.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 210, maxHeight: 210, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
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

  const { author, about } = Data.site.siteMetadata;
  const AuthorImage = Data.avatar.childImageSharp.fluid;

  return (
    <IntroWrapper>
      <IntroImage>
        <Image fluid={AuthorImage} alt="author" />
      </IntroImage>
      <IntroInfo>
        <IntroTitle>
          Hey! 👋😂👋
        </IntroTitle>
        <Desciption>{about}</Desciption>
        <SocialProfile items={SocialLinks} />
      </IntroInfo>
    </IntroWrapper>
  );
};

export default Intro;
