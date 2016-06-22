import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { getCouponUsage } from '../../redux/modules/CouponUsage/action'
import { Card, Headline } from '../../components'
import styles from './couponUsage.scss'

@connect(
    state => ({
        couponUsageInfo: state.couponUsage.usageInfo
    })
)
class CouponUsage extends Component {

    componentDidMount() {
        this.props.dispatch(getCouponUsage())
    }

    render() {
        return (
            <div>
                <Headline text="核销记录" />
                <div className={styles.container}>
                    {this.props.couponUsageInfo.length ? this.props.couponUsageInfo.map((item, i) =>
                        <Card key={i}>
                            <p>{item.couponName}</p>
                            <p>编号：{item.couponCode}</p>
                            <p>消费时间：{moment(item.useTime).format('YYYY.MM.DD HH:mm')}</p>
                        </Card>
                        ):
                        <Card>
                            <p>无核销记录</p>
                        </Card>
                    }
                </div>
            </div>
        )
    }
}

export default CouponUsage
