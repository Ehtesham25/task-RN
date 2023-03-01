import React from 'react'
import styled, { css } from 'styled-components';
import textStyles from "../styles/textStyles"


const StyledText = styled.Text`
${(props) => textStyles(props, css)}
`
const MyText = (props) => {
    const { onClick, fs, wd, align,} = props;
    return (
        <StyledText style={{ fontSize: fs || 14, width: wd , textAlign: align,  }} {...props} onPress={onClick} />
    )
}

export default MyText