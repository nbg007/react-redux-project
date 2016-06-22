import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getCouponUsage } from '../../redux/modules/CouponUsage/action'
import { CouponUsedCard } from '../../components'
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
        console.log(this.props)
        return (
            <div className={styles.container}>
                {this.props.couponUsageInfo.length ? this.props.couponUsageInfo.map((item, i) =>
                    <CouponUsedCard
                        usageInfo={{
                            couponName: item.couponName,
                            couponCode: item.couponCode,
                            useTime: item.useTime
                        }}
                        key={i}
                    />
                    ):
                    <div>无订单信息</div>
                }
            </div>
        )
    }
}

export default CouponUsage
