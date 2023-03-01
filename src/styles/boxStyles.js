const boxStyles = (props, css) => {
  return `
${props.wd && `width: 0`};
${props.df && `display: flex`};
${props.relative && `position: relative`};
${props.absolute && `position: absolute`};
${props.col && `flex-direction: column`};
${props.row && `flex-direction: row`};
${props.center && `align-items: center;`};
${props.abs && `position: absolute`};
${props.rel && `position: absolute`};
${props.bg && `background-color: ${props.bg}`};
${props.top && `top: ${props.top}`};
${props.left && `left: ${props.left}`};
${props.right && `right: ${props.right}`};
${props.bottom && `bottom: ${props.bottom}`};
${props.full && `flex: 1`};
${props.hasFlexGrow && `flex-grow: 1`};
${props.mar && `margin: ${props.mar}`};
${props.pad && `padding: ${props.pad}`};
${props.padV && `padding-vertical: ${props.padV}`};
${props.padH && `padding-horizontal: ${props.padH}`};
${props.ht && `height: ${props.ht}`};
${props.wd && `width: ${props.wd}`};
${props.hasRadius && `border-radius: ${props.hasRadius}`};
${
  props.hasRadiusTopLeft && `border-top-left-radius: ${props.hasRadiusTopLeft}`
};
${props.hasRadiusTopEnd && `border-top-end-radius: ${props.hasRadiusTopEnd}`};
${props.hasBorder && `border-width: ${props.hasBorder}`};
${props.borderColor && `border-color: ${props.borderColor}`};
${props.hasShadow && `box-shadow: ${props.hasShadow}`};
${
  props.centerAll &&
  `align-items: center;
justify-content: center;`
};
${props.around && `justify-content:space-around;`};
${props.between && `justify-content:space-between; align-items: center;`};
`;
};

export default boxStyles;
