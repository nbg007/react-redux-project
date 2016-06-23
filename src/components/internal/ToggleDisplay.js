import React, { Component, PropTypes } from 'react'

function ToggleDisplay(props) {
    return props.show ? props.children : null
}

export default ToggleDisplay
