import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import FlexItem from './FlexItem'
import styles from './flex.scss'

class Flex extends Component {
    static propTypes = {
        className: PropTypes.string,
        align: PropTypes.string
    };

    static defaultProps = {
        align: 'center center'
    };

    static Item = FlexItem;

    render () {
        const { className, align } = this.props
        const layoutAlign = align.split(' ')
        const flexStyle = {
            justifyContent: layoutAlign[0],
            WebkitJustifyContent: layoutAlign[0],
            alignItems: layoutAlign[1],
            WebkitAlignItems: layoutAlign[1]
        }

        return (
            <div className={classnames(styles.flex, className)} style={flexStyle}>
                {this.props.children}
            </div>
        )
    }
}

export default Flex
