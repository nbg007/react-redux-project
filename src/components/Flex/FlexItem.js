import React, { Component, PropTypes } from 'react'
import styles from './flex.scss'

class FlexItem extends Component {
    static propTypes = {
        flex: PropTypes.number.isRequired,
        className: PropTypes.string
    };

    render () {
        const {
            flex,
            className
        } = this.props

        const itemStyle = {
            flex: flex,
            WebkitFlex: flex
        }

        return(
            <div style={itemStyle} className={className}>
                {this.props.children}
            </div>
        )
    }
}

export default FlexItem
