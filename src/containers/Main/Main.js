import React from 'react'
import styled from 'styled-components'
import { Reader } from '../../components'

const Content = styled.main`
    min-height: 85vh;
    padding: var(--container-padding);
    margin: var(--container-padding-small) auto;
    background-color: var(--brand-white);
`
const Main = () => (
    <Content>
        <Reader
            config={{
                header: true,
                transformHeader: (header) => header.replace(/\s+/g, ''),
            }}
        />
    </Content>
)

export default Main
