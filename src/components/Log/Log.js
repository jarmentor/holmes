import PropTypes from 'prop-types'
import React from 'react'

const Log = ({ value, replacer = null, space = 2 }) => (
    <pre>
        <code>{JSON.stringify(value, replacer, space)}</code>
    </pre>
)

Log.propTypes = {
    replacer: PropTypes.any,
    space: PropTypes.number,
    value: PropTypes.any.isRequired,
}

export default Log
