const buttonStyles = (props, css) => {
  return `
    height: ${props.ht};
    width: ${props.wd};
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction:row;
    font-weight: 700;
    border-radius: 6px;
    ${props.color && `color:${props.color}`};
    ${props.absolute && `position: absolute`};
    ${props.mar && `marin: ${props.mar}`};
    ${props.pad && `padding: ${props.pad}`};
    ${props.bg && `background-color:${props.bg}`};
    ${props.elevation && `elevation:${props.elevation}`};
    ${props.hasRadius && `border-radius:${props.hasRadius}`};
    ${props.bordered && `border: 1px solid ${props.bordered}`};
    ${props.around && `justify-content:space-around; align-items: center`};
    ${props.between && `justify-content:space-between; align-items: center;`};
    ${props.center && `justify-content:center; align-items: center;`};
    ${props.top && `top: ${props.top}`};
${props.left && `left: ${props.left}`};
${props.right && `right: ${props.right}`};
${props.bottom && `bottom: ${props.bottom}`};
    `;
};
export default buttonStyles;
