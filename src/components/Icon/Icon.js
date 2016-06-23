import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class Icon extends Component {
    static propTypes = {
        iconName: PropTypes.string.isRequired,
        className: PropTypes.string,
        color: PropTypes.string,
        fontSize: PropTypes.string
    };

    render () {
        const { className, iconName, color, fontSize } = this.props
        const iconClassName = `icon-${iconName}`

        return (
            <i
                className={classnames('iconfont', iconClassName, className)}
                style={{color, fontSize}}
            />
        )
    }
}

export default Icon
