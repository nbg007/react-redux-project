import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { Card, Flex, Headline } from '../../components'
import { getMerchantInfo } from '../../redux/modules/ChildMerchant/action'

@connect(
    state => ({
        merchantInfo: state.childMerchant.merchantInfo
    })
)
class ChildMerchant extends Component {

    componentDidMount() {
        this.props.dispatch(getMerchantInfo())
    }

    render() {
        return (
            <div>
                <Headline text="二级商户信息" />
                <div className="card-container">
                    {this.props.merchantInfo.length ? this.props.merchantInfo.map((item, i) =>
                        <Card key={i}>
                            <Flex>
                                <Flex.Item flex={50}>
                                    <p>商户名：{item.channelName}</p>
                                    <p>注册时间：{moment(item.addTime).format('YYYY.MM.DD')}</p>
                                </Flex.Item>
                                <Flex.Item flex={50}>
                                    <p>手机号码：{item.mobile}</p>
                                    <p>业务类型：{item.businessTypeName}</p>
                                </Flex.Item>
                            </Flex>
                        </Card>):
                        <Card>
                            <p>无级商户信息</p>
                        </Card>
                    }
                </div>
            </div>
        )
    }
}

export default ChildMerchant
