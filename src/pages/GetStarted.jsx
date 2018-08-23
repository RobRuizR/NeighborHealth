import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import QuestionnaireIntro from '../components/GetStarted/QuestionnaireIntro';
import Questionnaire from '../components/GetStarted/Questionnaire';

const Title = styled.p`
  font-size: calc(2.5rem + 1.25vw);
  color: black;
  font-weight: 600;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  width: 100%;
  text-align: center;
  margin-top: 100px;
`;

const BlueTitle = Title.withComponent('span').extend`
  color: ${props => props.theme.color.lightBlue};
`;

const GetStartedPage = () => (
  <div>
    <Helmet title="Get Started" />
    <Title>
      Get <BlueTitle>Started</BlueTitle>
    </Title>
    <QuestionnaireIntro />
    <Questionnaire />
  </div>
);

export default GetStartedPage;