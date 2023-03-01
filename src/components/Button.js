import styled, { css } from "styled-components";
import buttonStyles from "../styles/buttonStyles"
import Icon from "./Icon";
import MyText from "./Text";

const StyledButton = styled.TouchableOpacity`
${(props) => buttonStyles(props, css)}
`


const Button = (props) => {
    const { disabled, color, src, text, weight, fs, left, right, onPress,position,fromRight, fromLeft } = props
    return (
        <StyledButton onPress={onPress}  {...props} >
            {text &&
                <>
                    {left && <Icon src={src} style={{position:position, left:fromLeft}} />}
                    <MyText color={color} disabled={disabled} weight={weight} fs={fs || 14}>
                        {text}
                    </MyText>
                    {right && <Icon src={src}  style={{position:position, right:fromRight}} />}
                </>}
        </StyledButton> 
    )
} 

export default Button
