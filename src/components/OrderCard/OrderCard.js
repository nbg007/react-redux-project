import React, { Component, PropTypes } from 'react'
import moment from 'moment'
import Flex from '../Flex/Flex'
import styles from './orderCard.scss'

class OrderCard extends Component {
    static propTypes = {
        orderInfo: PropTypes.shape({
            orderNum: PropTypes.string.isRequired,
            actualPrice: PropTypes.number.isRequired,
            addTime: PropTypes.string.isRequired,
            statusName: PropTypes.string.isRequired
        }).isRequired
    };

    render () {
        const { orderNum, actualPrice, addTime, statusName } = this.props.orderInfo

        return (
            <Flex className={styles.ordercard}>
                <Flex.Item flex={80}>
                    <p>订单号：{orderNum}</p>
                    <p>{moment(addTime).format('YYYY.MM.DD HH:mm')}</p>
                </Flex.Item>
                <Flex.Item flex={20}>
                    <strong>¥{actualPrice}</strong>
                    <p className="secondary-text">{statusName}</p>
                </Flex.Item>
            </Flex>
        )
    }
}

export default OrderCard
