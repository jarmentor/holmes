import React from 'react'

import { CSVReader } from 'react-papaparse'

function Reader({ config, updateState, children }) {
    function defaultParse(data) {
        console.log('---------------------------')
        console.log(data)
        console.log('---------------------------')
    }

    const handlers = {
        onDrop: (data) => {
            defaultParse(data)
            updateState(data)
        },
        onError: (err, file, inputElem, reason) => console.error(err),
        removeFile: (data) => {
            defaultParse(data)
            updateState(null)
        },
    }

    return (
        <CSVReader config={config} {...handlers} addRemoveButton>
            <span>Drop CSV file here or click to upload.</span>
        </CSVReader>
    )
}

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
