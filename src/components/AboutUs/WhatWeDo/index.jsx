import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import Idea from './../assets/Idea.png';
import People from './../assets/People.png';
import Plane from './../assets/Plane.png';

const Container = styled.div`
  width: 100%;
  margin: 50px 0;

  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  font-size: calc(1rem + 0.75vw);
  p {
    text-align: center;
  }
`;

const SliderMod = styled(Slider)`
  margin: 1.75em 0;
`;

const Div = styled.div`
  position: relative;
  height: 100%; 

  font-size: calc(0.75rem + 0.5vw);

  > * {
    margin-bottom: 1em;
  }
`;

const IconContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  ::before {
    content: "";
    position: absolute;
    top: 60%;
    left: 0;    

    width: 100%;
    height: 20%;
    background: ${props => props.theme.color.lightBlue};
  }
`;
const Icon = styled.img`
  width: 30%;
  position: relative;
`;

const Title = styled.p`
  font-size: 1.5em;
  font-weight: bold;

`;
const BlueTitle = Title.withComponent('span').extend`
  font-size: 1em;
  color: ${props => props.theme.color.lightBlue};
`;

const Text = styled.p`
  width: 80%;
  margin: 0 auto;
  
`;

const WhatWeDo = () => {
  const Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
        }
      }]
  };



  return (
    <Container> 
      <Title>Our Values</Title>
      <SliderMod {...Settings} >
        <Div>
          <IconContainer> <Icon src={Idea} /> </IconContainer>
          <Title>We are <BlueTitle>innovative</BlueTitle> </Title>
          <Text>
            We leverage technological factors and our local expertise to make the “impossible” happen. 
            These key ingredients are essential to ensure you a great experience with NeighborHealth
          </Text>
        </Div>
        <Div>
          <IconContainer> <Icon src={People} /> </IconContainer>
          <Title>We believe in a <BlueTitle>community</BlueTitle> </Title>
          <Text>
          Helping one another to ensure mutual success as individuals and as a community. 
          This is why NeighborHealth exists, we believe that healthcare should be easily accessible and affordable. 
          Our health experts are here to serve you, and for every service purchased, we provide a similar service for children in developing nations.
          </Text>
        </Div>
        <Div>
          <IconContainer> <Icon src={Plane} /> </IconContainer>
          <Title>Our service <BlueTitle>pledge</BlueTitle> </Title>
          <Text>
          We pledge to provide you with a healing, safe, and enjoyable experience. 
          We will adhere to continuous improvement practices and provide you with friendly and talented service to help you every step of the way.
          </Text>
        </Div>
      </SliderMod>
    </Container>
  )
};

export default WhatWeDo;