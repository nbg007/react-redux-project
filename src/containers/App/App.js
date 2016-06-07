import React, { PropTypes } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Link } from 'react-router'

injectTapEventPlugin()

function App({ children }) {
    return (
        <div className="page-container">
            <Link to="counter">Link</Link>
            {children}
        </div>
    )
}

App.propTypes = {
    children: PropTypes.element
}

export default App
