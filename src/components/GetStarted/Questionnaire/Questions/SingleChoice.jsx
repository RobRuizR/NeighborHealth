import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { device } from '../../../../utils/device';

const ContainerForm = styled.fieldset`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  width: 100%;
`;

const Title = styled.p`
  font-size: 1.25em;
  margin-bottom: 20px;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  padding: 10px;
  box-sizing: border-box;

  ${device.mobile} {
    padding: 0;
    margin-bottom: 10px;
  }
`;

const Label = styled.label`
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  margin: 25px 0;
  display: flex;
  flex-direction: row;
  min-width: 3rem;

  ${device.mobile} {
    margin-top: 0;
    margin-bottom: 15px;
  }
`;

const OtherLabel = styled(Label)`
  margin-left: 0px;
`;

const CheckboxInput = styled.input`
  font-size: 1em;
  position: absolute;
  opacity: 0;
  cursor: default;
`;

const Checkbox = styled.span`
  width: 0.75em;
  height: 0.75em;
  position: relative;
  background: white;
  padding: 0.3em;
  border-radius: 100%;
  transition: 150ms ease-in-out all;
  border: 2px solid ${props => props.theme.color.lightBlue};

  :before {
    content: '\u2713';
    font-weight: 700;
    width: 100%;
    height: 100%;
    position: absolute;
    color: ${props => props.theme.color.lightBlue};
    opacity: 0;
    transition: inherit;
    top: 50%;
    left: 50%;
    transform: translate(-25%, -50%);
  }

  input[type='checkbox']:checked ~ &:before,
  input[type='radio']:checked ~ &:before {
    opacity: 1;
  }

  input[type='checkbox']:focus ~ & {
    background: ${props => props.theme.color.lightBlue};

    :before {
      color: white;
    }
  }
`;
const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${({ horizontal }) =>
    horizontal &&
    `
    flex-direction: row;
    justify-content: space-between;
    flex-flow: row wrap;
  `};
`;

const OtherInput = styled.input`
  font-size: 1em;
  font-family: ${props => props.theme.fontFamily.main}, sans-serif;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.black};
  background: none;
  outline: none;
  margin-left: 10px;
  width: 60%;
`;

const SingleChoice = (props) => {
  const {
    questionText,
    includeOpenAnswer,
    name,
    options,
    className,
    setFieldValue,
    horizontal,
    values,
  } = props;

  return (
    <ContainerForm className={className}>
      <Title> {questionText} </Title>
      <input type="hidden" name={name} value={values[name]} />
      <OptionsContainer horizontal={horizontal}>
        {options.map(option => (
          <Label key={option}>
            <CheckboxInput
              type={'checkbox'}
              onChange={() => setFieldValue(name, option)}
              checked={values[name] === option}
            />
            <Checkbox />
            &nbsp;
            {option}
          </Label>
        ))}
      </OptionsContainer>
      {includeOpenAnswer && (
        <OtherLabel>
          Other:
          <OtherInput
            questionText="other"
            onChange={ev => setFieldValue(name, ev.target.value)}
            name={`${name}-other`}
          />
        </OtherLabel>
      )}
    </ContainerForm>
  );
};

SingleChoice.propTypes = {
  questionText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  includeOpenAnswer: PropTypes.bool,
};

SingleChoice.defaultProps = {
  includeOpenAnswer: false,
};

export default SingleChoice;
