import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import classnames from 'classnames'
import * as modalActions from '../../redux/modules/Modal/action'
import * as userActions from '../../redux/modules/User/action'
import { Modal, Button, FlatButton, Flex, Icon } from '../../components'
import styles from './user.scss'

@connect(
    state => ({
        openModal: state.modal.openModal,
        balance: state.user.balance,
        accountId: state.user.accountId
    })
)
class User extends Component {

    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props)
        this.openModal = ::this.openModal
        this.closeModal = ::this.closeModal
        this.handleConfirm = ::this.handleConfirm
    }

    componentWillMount() {
        this.username = JSON.parse(localStorage.userInfo).username
    }

    componentDidMount() {
        this.props.dispatch(userActions.getAccount())
    }

    openModal() {
        this.props.dispatch(modalActions.openModal())
    }

    closeModal() {
        this.props.dispatch(modalActions.closeModal())
    }

    handleConfirm() {
        delete localStorage.token
        this.context.router.replace('login')
    }

    render() {
        const { accountId, balance } = this.props

        return (
            <div>
                <div className={styles.balance}>
                    <p className={styles.price}>
                        ¥
                        <span>{balance}</span>
                    </p>
                    <p>账户余额</p>
                </div>
                <div className="title">
                    <p>账户信息</p>
                </div>
                <Flex className="list">
                    <Flex.Item flex={50}>
                        <Icon iconName="person" className={styles.labelIcon} color="#3F51B5" />
                        账户名
                    </Flex.Item>
                    <Flex.Item flex={50} className="text-right">
                        {this.username}
                    </Flex.Item>
                </Flex>
                <Link to={{pathname: 'withdraw', query: {accountId}}} className="no-style">
                    <Flex className="list">
                        <Flex.Item flex={50}>
                            <Icon iconName="money" className={styles.labelIcon} color="#FFC107" />
                            提现
                        </Flex.Item>
                        <Flex.Item flex={50} className="text-right">
                            <Icon iconName="jinlingyingcaiicon02" className="grey-text" />
                        </Flex.Item>
                    </Flex>
                </Link>
                <Flex className="list" tap={this.openModal}>
                    <Flex.Item flex={50}>
                        <Icon iconName="084tuichu" className={styles.labelIcon} color="#F44336" />
                        退出登录
                    </Flex.Item>
                </Flex>
                <Modal>
                    <Modal.Content>
                        <h3>确认要退出吗？</h3>
                    </Modal.Content>
                    <Modal.Actions>
                        <FlatButton label="取消" secondary={true} tap={this.closeModal} />
                        <FlatButton label="确认" secondary={true} tap={this.handleConfirm} />
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default User
