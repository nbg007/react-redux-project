import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import styles from './headline.scss'

function Headline(props) {
    return (
        <div className={classnames(styles.headline, props.className, {
            [styles.breakLine]: props.breakLine
        })}>
            {props.text}
        </div>
    )
}

Headline.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    breakLine: PropTypes.bool
}

export default Headline
