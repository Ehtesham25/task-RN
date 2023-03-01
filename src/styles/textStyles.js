const textStyles = (props, css) => {
  return `
    ${props.bold && `font-weight:bold`}
    ${props.position && `position:${props.position}`}
    ${props.color && `color:${props.color}`}
    ${props.center && `text-align: center`}
    ${props.weight && `font-weight:${props.weight ? props.weight : 'normal'}`}
    ${props.align && `text-align:${props.align}`}
    ${props.mar && `marin:${props.marin}`};
    ${props.pad && `padding: ${props.pad}`};
    ${props.cap && `textTransform:capitalize`};
    ${props.color && `color:${props.color}`}
`;
};

export default textStyles;
