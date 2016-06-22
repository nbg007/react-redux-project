import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { OrderCard, Header } from '../../components'
import { getOrder } from '../../redux/modules/Order/action'
import styles from './order.scss'
import { fakeDB } from './fakeDB'

@connect(
    state => ({
        orderInfo: state.order.orderInfo
    })
)
class Order extends Component {

    componentDidMount() {
        this.props.dispatch(getOrder())
    }

    render() {
        return (
            <div>
                {this.props.orderInfo.length ? this.props.orderInfo.map((item, i) =>
                    <div className={styles.container} key={i}>
                        <OrderCard
                            orderInfo={{
                                orderNum: item.orderNum,
                                actualPrice: item.actualPrice,
                                addTime: item.addTime,
                                statusName: item.statusName
                            }}
                        />
                    </div>):
                    <Header text="无订单信息" />
                }
            </div>
        )
    }
}

export default Order
