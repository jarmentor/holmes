import React from 'react'
import styled from 'styled-components'

const StyledCopyright = styled.p`
    font-size: var(--small-type);
`

function Copyright() {
    const year = new Date().getFullYear()

    return (
        <StyledCopyright>
            &copy; Copyright {year} Jonathan Armentor
        </StyledCopyright>
    )
}

export default Copyright
