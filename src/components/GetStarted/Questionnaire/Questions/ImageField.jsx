import React from 'react';
import styled from 'styled-components';

const Label = styled.label`

font-family: ${props => props.theme.fontFamily.main}, sans-serif;
display: flex;
flex-direction: column;
align-items: center;
padding: 5px;
min-width: 15rem;
flex: 1;
margin-right: 0;

:before {
  content: "";
  display: block;
  width: 5em;
  height: 5em;
  background-image: url('${({ backgroundImage }) => backgroundImage}');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
`;

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;

  &:focus ~ span {
    background: ${props => props.theme.color.lightBlue};

    :before {
      color: white;
    }
  }
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

  input[type='checkbox']:checked ~ &:before {
    opacity: 1;
  }
`;

const setField = (name, setFieldValue, value, valueList) => {
  const newValueList = [...valueList];
  if (newValueList.includes(value)) {
    const index = valueList.indexOf(value);
    newValueList.splice(index, 1);
  } else {
    newValueList.push(value);
  }

  setFieldValue(name, newValueList);
};

function ImageField(props) {
  const { setFieldValue, optionData, values, name, keyAccess } = props;

  return (
    <Label key={keyAccess} backgroundImage={optionData.image}>
      <CheckboxInput
        type="checkbox"
        onChange={() =>
          setField(name, setFieldValue, optionData.name, values[name])
        }
      />
      {optionData.name}
      <Checkbox checked={values[name].includes(optionData.name)} />
    </Label>
  );
}

export default ImageField;
