import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import Icon from '../Icon/Icon'
import styles from './button.scss'

class Button extends Component {
    static propTypes = {
        fullWidth: PropTypes.bool,
        label: PropTypes.string.isRequired,
        type: PropTypes.string,
        disabled: PropTypes.bool,
        tap: PropTypes.func,
        className: PropTypes.string,
        iconName: PropTypes.string
    };

    constructor(props) {
        super(props)
    }

    render () {
        const {
            fullWidth,
            label,
            type,
            disabled,
            className,
            iconName,
            tap = () => {}
        } = this.props

        return (
            <button
                className={classnames(
                    styles.button,
                    {[styles.fullWidth]: fullWidth},
                    className
                )}
                type={type || 'button'}
                onTouchTap={tap}
                disabled={disabled}
            >
                {iconName && <Icon iconName={iconName} />}
                {label}
            </button>
        )
    }
}

export default Button
