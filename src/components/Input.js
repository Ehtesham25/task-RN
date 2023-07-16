import React from 'react';
import styled, {css} from 'styled-components';

import textInputStyles from "../styles/textInputStyles"

const TextInput = styled.TextInput`
${(props) => textInputStyles(props, css)}
`

const Input = props => {
  const {placeholder} = props;
  return <TextInput placeholder={placeholder} {...props}   multiline={props.multiline}  />;
};

export default Input;
