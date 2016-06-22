import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import styles from './header.scss'

class Header extends Component {
    static propTypes = {
        className: PropTypes.string,
        text: PropTypes.string
    };

    render () {
        const { className, text } = this.props

        return (
            <div className={classnames(styles.header, className)}>
                {text}
            </div>
        )
    }
}

export default Header
