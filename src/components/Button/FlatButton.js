import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import styles from './button.scss'

class FlatButton extends Component {
    static propTypes = {
        primary: PropTypes.bool,
        secondary: PropTypes.bool,
        tap: PropTypes.func
    };

    static defaultProps = {
        tap: () => undefined
    }

    render () {
        const { label, primary, secondary, tap } = this.props

        return(
            <button
                className={classnames(styles.flatButton, {
                    ['primary-text']: primary,
                    ['secondary-text']: secondary
                })}
                onTouchTap={tap}
            >
                {label}
            </button>
        )
    }
}

export default FlatButton
