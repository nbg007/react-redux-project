import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import styles from './card.scss'

function Card(props) {
    return (
        <div className={classnames(styles.card, props.className)}>
            {props.children}
        </div>
    )
}

Card.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
}

export default Card
