import React from 'react'
import { Copyright } from '../../components'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    padding: var(--container-padding);
    background-color: var(--brand-gray);
    color: var(--brand-white);
    padding-top: var(--container-small-padding);
`

function Footer() {
    return (
        <StyledFooter>
            <Copyright />
        </StyledFooter>
    )
}

export default Footer
