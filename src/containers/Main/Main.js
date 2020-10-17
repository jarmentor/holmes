import React, { useState } from 'react'
import styled from 'styled-components'
import { Reader } from '../../components'
import Card from '../../components/Card/Card'
const Content = styled.main`
    min-height: 85vh;
    padding: var(--container-padding);
    margin: var(--container-padding-small) auto;
    background-color: var(--brand-white);
`

const StyledTable = styled.table`
    width: 100%;
    text-align: left;

    td {
        border: 1px solid currentColor;
        padding: 1rem 0.25rem;
    }
`

const TableHeadings = ({ headings }) => (
    <thead>
        <tr>
            {headings.map((head, key) => (
                <th key={key}>{head}</th>
            ))}
        </tr>
    </thead>
)

const TableBody = ({ data }) => (
    <tbody>
        {' '}
        {data.map(({ data: rowData }) => {
            const {
                ItemNumber,
                ItemName,
                ItemType,
                ItemDescription,
                DepartmentName,
                BriefDescription,
            } = rowData

            return (
                <tr>
                    <td>{ItemNumber}</td>
                    <td>{ItemName}</td>
                    <td>{ItemType}</td>
                    <td>{ItemDescription}</td>
                    <td>{DepartmentName}</td>
                    <td>{BriefDescription}</td>
                </tr>
            )
        })}
    </tbody>
)

const DataContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

    > * {
        padding: 10px 5px;
        max-width: 200px;
    }
`

const Main = () => {
    const [data, setData] = useState(null)
    const readerConfig = {
        header: true,
        transformHeader: (header) => header.replace(/\s+/g, ''),
        dynamicTyping: true,
    }
    return (
        <Content>
            <Reader config={readerConfig} updateState={setData} />
            {/* {data && (
                <StyledTable>
                    <TableHeadings headings={data[0].meta.fields} />
                    <TableBody data={data} />
                </StyledTable>
            )} */}

            <DataContainer>
                {data &&
                    data.map(({ data: rowData }) => {
                        const {
                            ItemNumber,
                            ItemName,
                            ItemType,
                            ItemDescription,
                            DepartmentName,
                        } = rowData

                        return (
                            <Card title={ItemName} subtitle={ItemNumber}>
                                <ul>
                                    <li>{ItemType}</li>
                                    <li>{DepartmentName}</li>
                                    <li>{ItemDescription}</li>
                                </ul>
                            </Card>
                        )
                    })}
            </DataContainer>
        </Content>
    )
}

export default Main
