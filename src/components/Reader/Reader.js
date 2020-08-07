import React, { useState } from 'react'

import { CSVReader } from 'react-papaparse'

function parsePlaceholder(data) {
    console.log('---------------------------')
    console.log(data)
    console.log('---------------------------')
}

const handlers = {
    onDrop: (data) => {
        parsePlaceholder(data)
    },
    onError: (err, file, inputElem, reason) => console.error(err),
    removeFile: (data) => {
        parsePlaceholder(data)
    },
}

const Reader = ({ config, children }) => (
    <CSVReader config={config} {...handlers} addRemoveButton>
        <span>Drop CSV file here or click to upload.</span>
    </CSVReader>
)

// const sortedObj = (state) =>
//     state
//         .map(
//             ({
//                 data: { ItemNumber, ItemName, ItemDescription, DepartmentName },
//             }) => ({
//                 ItemNumber,
//                 ItemName,
//                 ItemDescription,
//                 DepartmentName,
//             })
//         )
//         .sort((a, b) =>
//             Number.parseInt(a.ItemNumber) > Number.parseInt(b.ItemNumber)
//                 ? 1
//                 : -1
//         )

export default Reader
