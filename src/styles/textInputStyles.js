const textInputStyles = (props, css) => {
  return `
    ${props.borderbottom && `border-bottom-width:${props.borderbottom}`};
    ${
      props.borderbottomcolor &&
      `border-bottom-color:${props.borderbottomcolor}`
    };
    ${props.mar && `marin: ${props.mar}`};
    ${props.pad && `padding: ${props.pad}`};
    ${props.bg && `background-color:${props.bg}`};
    ${props.elevation && `elevation:${props.elevation}`};
    ${props.hasRadius && `border-radius:${props.hasRadius}`};
    ${props.bordered && `border: 1px solid ${props.bordered}`};
    `;
};
export default textInputStyles;
