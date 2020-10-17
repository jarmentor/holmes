import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
    color: var(--brand-gray);
    font-weight: 300;
`
const SubTitle = styled.div`
    color: #ccc;
    font-weight: 300;
    margin: 6px 0;
`
const Description = styled.p`
    color: var(--brand-gray);
    font-weight: 300;
`
const Action = styled.button`
    margin: 0 5px;
    padding: 8px 14px;
    background: rgba(155, 155, 155, 0.2);
    color: var(--brand-gray);
    cursor: pointer;
    border: 1px solid var(--brand-gray);
    outline: 0;
    font-weight: 300;
    :hover {
        opacity: 0.8;
    }
`
const Actions = styled.div`
    color: #333;
    display: flex;
    align-items: center;
`

const StyledContainer = styled.div`
    border: 1px solid var(--brand-gray);
    padding: 25px 12px 18px;
    width: 300px;
`

const Card = ({ title, subtitle, children }) => (
    <StyledContainer>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <Description>{children}</Description>
        <Actions>
            <Action>Collect</Action>
        </Actions>
    </StyledContainer>
)

export default Card
