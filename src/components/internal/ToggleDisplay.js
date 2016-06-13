import React, { Component, PropTypes } from 'react'

class ToggleDisplay extends Component {
    static propTypes = {
        show: PropTypes.bool.isRequired,
        children: PropTypes.element
    };

    render() {
        return (
            <div>
                {this.props.show ? this.props.children : null}
            </div>
        )
    }
}

export default ToggleDisplay
