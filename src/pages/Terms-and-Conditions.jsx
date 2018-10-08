import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import AppLayout from '../components/AppLayout';
import Terms from '../components/Terms';

const Title = styled.p`
  font-size: calc(1.5rem + 1vw);
  color: black;
  font-weight: 600;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  width: 100%;
  text-align: center;
`;
const BlueTitle = styled.span`
  color: ${props => props.theme.color.lightBlue};
`;

const TermsComp = styled(Terms)`
    margin-top: 2em;
`;

const TermsPage = () => (
    <AppLayout>
      <div>
        <Helmet title="T&C" />
        <Title>
          Terms <BlueTitle>&</BlueTitle> Conditions
        </Title>
        <TermsComp />
      </div>
    </AppLayout>
  );
  
  export default TermsPage;
  