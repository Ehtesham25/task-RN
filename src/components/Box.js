import styled, { css } from 'styled-components'
import boxStyles from "../styles/boxStyles"

const Box = styled.View`
${(props) => boxStyles(props, css)}
`

export default Box