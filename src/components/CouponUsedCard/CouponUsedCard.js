import React, { Component, PropTypes } from 'react'
import moment from 'moment'
import Flex from '../Flex/Flex'
import styles from './card.scss'

class CouponUsedCard extends Component {
    static propTypes = {
        usageInfo: PropTypes.object.isRequired
    };

    render () {
        const { couponName, couponCode, useTime} = this.props.usageInfo

        return (
            <div className={styles.card}>
                <p>{couponName}</p>
                <p>编号：{couponCode}</p>
                <p>消费时间：{moment(useTime).format('YYYY.MM.DD HH:mm')}</p>
            </div>
        )
    }
}

export default CouponUsedCard
