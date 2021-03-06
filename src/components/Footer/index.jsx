import React from 'react';
import styled from 'styled-components/macro';
import Link from 'gatsby-link';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { device } from '../../utils/device';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: relative;

  background: ${({ theme }) => theme.color.lightGray};
  padding: 20px;

  font-size: calc(0.5rem + 0.5vw);

  &,
  & > div {
    font-family: 'Nunito', sans-serif;
  }

  ${device.mobile} {
    padding: 20px 10px;
    font-size: calc(0.75rem + 0.5vw);
    grid-row-gap: 1rem;

    display: grid;
    grid-template: auto auto auto / 1fr 1fr;
    grid-template-areas:
      'desc desc'
      'useful useful'
      'connect contact';
  }
`;

const Texto = styled.p`
  color: ${({ theme }) => theme.color.blueGray};
`;

const Description = styled(Texto)`
  width: 30%;
  ${device.mobile} {
    width: initial;
  }
`;

const Separator = styled.div`
  width: 3px;
  background: ${({ theme }) => theme.color.blueGray};
  height: 200px;
  border-radius: 10px;
  margin: auto 0;

  ${device.mobile} {
    display: none;
  }
`;

const LinksTitle = styled(Texto)`
  font-size: 1.1em;
  text-align: center;
  font-weight: 600;
  margin-bottom: 20px;
`;

const LinksCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  ${device.mobile} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const UsefulLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.blueGray};

  padding: 10px 0;
  font-size: 1em;
  ${device.mobile} {
    padding: 5px;
  }
`;

const SocialLink = styled(OutboundLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.blueGray};

  padding: 10px 0;
  ${device.mobile} {
    padding: 5px;
  }
`;

const ContactCont = styled(LinksCont)``;
const ContactTitle = styled(LinksTitle)``;

const ContactData = styled(Texto)`
  padding: 10px 0;
  word-break: break-all;
  ${device.mobile} {
    padding: 5px;
  }
`;

const MessageButton = styled(Link)`
  background: ${({ theme }) => theme.color.red};
  text-transform: uppercase;
  color: white;
  border: 2px solid #dd2520;
  border-radius: 30px;
  text-decoration: none;
  padding: 5px 0.5em;
  margin: 1em;
  font-size: 0.75em;

  text-align: center;

  transition: all 0.25s ease;

  :hover {
    color: ${({ theme }) => theme.color.red};
    background: transparent;
  }

  ${device.mobile} {
    padding: 5px 2.5px;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-start;

  ${device.mobile} {
    > p {
      margin-bottom: 0.75em;
    }
  }
`;

const SocialIcon = styled.i`
  font-size: 1.5em;
`;

const Footer = () => (
  <Container>
    <Description style={{ gridArea: 'desc' }}>
      SmileAbroad creates a personalized itinerary that provides you with
      personal transportation between dental appointments, any selected tourist
      activities and attractions, and your chosen accommodation services which
      have all been pre-selected for safety and convenience.
    </Description>

    <Separator />

    <Div style={{ gridArea: 'useful' }}>
      <LinksTitle>Learn More</LinksTitle>
      <LinksCont>
        <UsefulLink to="/">Home</UsefulLink>
        <UsefulLink to="/blog">Blogs</UsefulLink>
        <UsefulLink to="/get-started">Get Started</UsefulLink>
        <UsefulLink to="/terms-and-conditions">
          Terms {'&'} conditions
        </UsefulLink>
      </LinksCont>
    </Div>

    <Separator />

    <Div style={{ gridArea: 'contact' }}>
      <ContactTitle>Contact Us</ContactTitle>
      <ContactCont>
        <MessageButton to="/contact">send a message</MessageButton>
      </ContactCont>
    </Div>

    <Separator />

    <Div style={{ gridArea: 'connect' }}>
      <ContactTitle>Let's connect!</ContactTitle>
      <ContactCont>
        <SocialLink href="tel:+1-512-717-3280" target="_blank">
          +1 512 717 3280
        </SocialLink>
        <SocialLink
          href="https://www.facebook.com/NeighborHealth/"
          target="_blank"
        >
          <SocialIcon className="fab fa-facebook" />
        </SocialLink>

        <SocialLink
          href="https://www.instagram.com/neighborhealthco/"
          target="_blank"
        >
          <SocialIcon className="fab fa-instagram" />
        </SocialLink>
      </ContactCont>
    </Div>
  </Container>
);

export default Footer;
