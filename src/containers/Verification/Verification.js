import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { queryCoupon, resetCouponInfo, cancelCoupon } from '../../redux/modules/Verification/action'
import { Form, Flex, Headline, Toast, notify, Button, Card } from '../../components'
import styles from './verification.scss'

@connect(
    state => ({
        verificationState: state.verification
    })
)
class Verification extends Component {

    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props)
        this.search = ::this.search
        this.cancelCoupon = ::this.cancelCoupon
    }

    componentDidMount() {
        this.props.dispatch(resetCouponInfo())
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.verificationState.cancelCouponStatus) {
            notify('核销成功', 'success', 1500, () => {
                this.context.router.replace('/home')
            })
        }
    }

    search(data) {
        this.props.dispatch(queryCoupon(data.couponCode))
    }

    cancelCoupon() {
        let isCancel = confirm('确认要核销吗？')
        const { verificationState, dispatch } = this.props

        if (isCancel) {
            dispatch(cancelCoupon(verificationState.info))
        }
    }

    tipMsg() {
        if (this.props.verificationState.isLoading) {
            return '查询中，请稍后...'
        } else if(this.props.verificationState.errMsg) {
            return this.props.verificationState.errMsg
        } else if(this.props.verificationState.info) {
            return '消费券信息'
        } else {
            return '请输入编号'
        }
    }

    render() {
        const { info } = this.props.verificationState

        return (
            <div>
                <Toast />
                <Form onSubmit={this.search}>
                    <Form.Input
                        hintText="消费券编号"
                        name="couponCode"
                        style={{border: '0px'}}
                        pattern="\d*"
                        validate={['required', 'maxLength_5']}
                    />
                    <Form.SubmitButton label="查询" />
                </Form>
                <Headline text={this.tipMsg()} className={styles.header} breakLine={true} />
                {info &&
                    <div>
                        <Flex className="list">
                            <Flex.Item flex={30}>
                                消费券名称
                            </Flex.Item>
                            <Flex.Item flex={70} className="text-right">
                                {info.couponName}
                            </Flex.Item>
                        </Flex>
                        <Flex className="list">
                            <Flex.Item flex={30}>
                                有效期
                            </Flex.Item>
                            <Flex.Item flex={70} className="text-right">
                                {moment(info.endTime).format('YYYY.MM.DD')}
                            </Flex.Item>
                        </Flex>
                        <Flex className="list">
                            <Flex.Item flex={30}>
                                使用状态
                            </Flex.Item>
                            <Flex.Item flex={70} className="text-right">
                                {info.useFlag===0 && '未使用'}
                                {info.useFlag===1 && '已使用'}
                                {info.useFlag===2 && '正在使用'}
                                {info.useFlag===9 && '不可使用'}
                            </Flex.Item>
                        </Flex>
                        <Flex className="list">
                            <Flex.Item flex={30}>
                                消费券描述
                            </Flex.Item>
                            <Flex.Item flex={70} className="text-right small-text">
                                {info.couponStrategyDescription}
                            </Flex.Item>
                        </Flex>
                        <Button label="核销" className={styles.cancelBtn} iconName="cancel" tap={this.cancelCoupon} />
                    </div>
                }
            </div>
        )
    }
}

export default Verification
