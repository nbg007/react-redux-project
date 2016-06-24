import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { Card, Flex, Headline } from '../../components'
import { getOrder } from '../../redux/modules/Order/action'
// import { fakeDB } from './fakeDB'

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
                <Headline text="订单信息" />
                <div className="card-container">
                    {this.props.orderInfo.length ? this.props.orderInfo.map((item, i) =>
                        <Card key={i}>
                            <Flex>
                                <Flex.Item flex={80}>
                                    <p>订单号：{item.orderNum}</p>
                                    <p>{moment(item.addTime).format('YYYY.MM.DD HH:mm')}</p>
                                </Flex.Item>
                                <Flex.Item flex={20}>
                                    <strong>¥{item.actualPrice}</strong>
                                    <p className="secondary-text">{item.statusName}</p>
                                </Flex.Item>
                            </Flex>
                        </Card>):
                        <Card>
                            <p>无订单信息</p>
                        </Card>
                    }
                </div>
            </div>
        )
    }
}

export default Order
