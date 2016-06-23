import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { ToggleDisplay } from '../internal'
import { ModalContent, ModalActions } from './ModalContainer'
import styles from './modal.scss'

@connect(
    state => ({
        openModal: state.modal.openModal
    })
)
class Modal extends Component {
    static Content = ModalContent;

    static Actions = ModalActions;

    constructor(props) {
        super(props)
        this.disableMove = ::this.disableMove
    }

    disableMove(e) {
        e.preventDefault()
    }

    render () {
        const { openModal, children } = this.props

        return (
            <ToggleDisplay show={openModal}>
                <div className={styles.container} onTouchMove={this.disableMove}>
                    <div className={classnames(styles.modal, 'animatedFast', 'slideInDown')}>
                        {children}
                    </div>
                </div>
            </ToggleDisplay>
        )
    }
}

export default Modal
