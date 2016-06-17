import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class Icon extends Component {
    static propTypes = {
        iconName: PropTypes.string.isRequired,
        className: PropTypes.string,
        color: PropTypes.string
    };

    render () {
        const { className, iconName, color } = this.props
        const iconClassName = `icon-${iconName}`

        return (
            <i
                className={classnames('iconfont', iconClassName, className)}
                style={{color}}
            />
        )
    }
}

export default Icon
