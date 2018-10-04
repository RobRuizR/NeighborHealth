import React from 'react';
import styled from 'styled-components';

import { device } from './../../utils/device';
import Question from './Question';

const Container = styled.div`
  margin: 2em auto;
  width: 60%;
  padding: 2em 3.5em;
  display: flex;
  flex-direction: column;

  font-size: calc(0.75rem + 0.5vw);
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;

  background: #efefef;

  ${device.mobile} {
    margin: 2em 0;
    width: 100%;
  }

  ul {
    list-style-position: inside;
  }
`;

const IndivQuestion = styled(Question)`
  margin-bottom: 2.5em;
`;

const Faq = props => {
  const questions = props.allQuestions.map(data => {
    return (
      <IndivQuestion
        key={data.node.frontmatter.title}
        question={data.node.frontmatter.question}
        answer={data.node.rawMarkdownBody}
      />
    );
  });

  return <Container>{questions}</Container>;
};

export default Faq;
