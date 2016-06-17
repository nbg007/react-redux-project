import React, { PropTypes } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Link } from 'react-router'

injectTapEventPlugin()

<<<<<<< HEAD
function App({ children }) {
    return (
        <div className="page-container">
            <Link to="counter">Link</Link>
=======
function App({children}) {
    return (
        <div className="page-container">
>>>>>>> 40b89d3edaa758328c886e9511658c1ee5d15924
            {children}
        </div>
    )
}

App.propTypes = {
    children: PropTypes.element
}

export default App
