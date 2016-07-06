import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { Card, Flex, Headline } from '../../components'
import { getSalesmanInfo } from '../../redux/modules/ChildSalesman/action'

@connect(
    state => ({
        salesmanInfo: state.childSalesman.salesmanInfo
    })
)
class ChildSalesman extends Component {

    componentDidMount() {
        this.props.dispatch(getSalesmanInfo())
    }

    render() {
        return (
            <div>
                <Headline text="二级业务员信息" />
                <div className="card-container">
                    {this.props.salesmanInfo.length ? this.props.salesmanInfo.map((item, i) =>
                        <Card key={i}>
                            <Flex>
                                <Flex.Item flex={50}>
                                    <p>姓名：{item.realname}</p>
                                    <p>注册时间：{moment(item.addTime).format('YYYY.MM.DD')}</p>
                                </Flex.Item>
                                <Flex.Item flex={50}>
                                    <p>手机号码：{item.mobile}</p>
                                    <p>业务类型：{item.businessTypeName}</p>
                                </Flex.Item>
                            </Flex>
                        </Card>):
                        <Card>
                            <p>无业务员信息</p>
                        </Card>
                    }
                </div>
            </div>
        )
    }
}

export default ChildSalesman
