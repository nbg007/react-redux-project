import React, { Component, PropTypes } from 'react'
import styles from './modal.scss'

export function ModalContent(props) {
    return (
        <div className={styles.content}>
            {props.children}
        </div>
    )
}

export function ModalActions(props) {
    return (
        <div className={styles.actions}>
            {props.children}
        </div>
    )
}
