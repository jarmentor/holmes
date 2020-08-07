import React from 'react'
import { Masthead } from '../../components'
import { ReactComponent as ReactLogo } from './logo.svg'
import styled from 'styled-components'

const Logo = styled(ReactLogo)`
    height: 2rem;
    pointer-events: none;

    & > * {
        fill: var(--brand-white);
    }
`

const StyledHeader = styled.header`
    background-color: var(--brand-gray);
    min-height: 2vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: var(--brand-white);
    padding: var(--container-padding);
    padding-bottom: var(--container-small-padding);
`

function Header() {
    return (
        <StyledHeader>
            <Logo />
            <Masthead>Holmes</Masthead>
        </StyledHeader>
    )
}

export default Header
