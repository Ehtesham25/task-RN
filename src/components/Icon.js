import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
${props => props.mar && `marin:${props.mar}`}
${props => props.pad && `padding:${props.pad}`}
${props => props.ht && `height: ${props.ht}`}
${props => props.wd && `width: ${props.wd}`}
${props => props.mode && `resize-mode: ${props.mode}`}
${props => props.border && `border-radius: ${props.border}`}
${props => props.zIdx && `z-index: ${props.zIdx}`}
${props => props.bg && `background-color: ${props.bg}`}
`;
const Icon = props => {
  const {border, ht, wd} = props;
  return (
    <Container {...props}>
      <Image source={props.src} style={{borderRadius: border && border}} />
    </Container>
  );
};

export default Icon;
