import React from 'react'
import styled from 'styled-components'
const StyledMasthead = styled.h1`
    text-transform: lowercase;
    line-height: 2rem;
    font-size: 1.5rem;
`

function Masthead({ children }) {
    return <StyledMasthead>{children}</StyledMasthead>
}

export default Masthead
