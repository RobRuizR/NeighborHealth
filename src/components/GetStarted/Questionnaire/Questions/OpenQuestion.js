import React from 'react';
import styled from 'styled-components';

const Container = styled.label`
  margin: 20px 0;
  width: 100%;
`;

const Title = styled.p`
  font-size: calc(1rem + 1vw);
  margin-bottom: 20px;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  padding: 10px;
  box-sizing: border-box;

  @media(max-width: 520px) {
    padding: 0;
    margin-bottom: 10px;
  }
`;

const Answer = styled.input`
  border: ${props => props.theme.color.lightBlue} 2px solid;
  border-radius: 15px;
  padding: 10px;
  font-size: calc(0.85rem + 1vw);
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;

  width: 100%;
  box-sizing: border-box;

  &:focus{
    outline:none;
  }

  &:hover {
    box-shadow: 2px 2px 5px 1px rgba(0, 198, 219, 0.25),
                -2px -2px 5px 1px rgba(0, 198, 219, 0.25);
  }
`;

const OpenQuestion = ({questionText, ...rest}) => {
  return (
  <Container>
    <Title> {questionText} </Title>
    <Answer 
      {...rest}
    />
  </Container>
  );
};

// TODO: define prop-types.
/*
OpenQuestion.proptypes = {
  questionText: PropTypes.string.required,
  onChange: PropTypes.func.required,
  name: PropTypes.string.required,
  required: PropTypes.bool,
  autoComplete: PropTypes.string,
  type: PropTypes.string
};
*/

OpenQuestion.defaultProps = {
  required: false,
  type: 'text'
};

export default OpenQuestion;
