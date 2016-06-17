import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import styles from './button.scss'

class Button extends Component {
    static propTypes = {
        fullWidth: PropTypes.bool,
        secondary: PropTypes.bool,
        label: PropTypes.string.isRequired,
        type: PropTypes.string,
        disabled: PropTypes.bool
    };

    constructor(props) {
        super(props)
    }

    render () {
        const {
            fullWidth,
            secondary,
            label,
            type,
            disabled,
            tap = () => {}
        } = this.props

        return (
            <button
                className={classnames(
                    styles.button,
                    {[styles.fullWidth]: fullWidth}
                )}
                type={type || 'button'}
                onTouchTap={tap}
                disabled={disabled}
            >
                {label}
            </button>
        )
    }
}

export default Button
