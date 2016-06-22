import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Form, Toast, notify } from '../../components'
import * as actions from '../../redux/modules/Withdraw/action'

@connect(
    state => ({
        bankInfo: state.withdraw.bankInfo,
        lastBankInfo: state.withdraw.lastBankInfo,
        accountId: state.withdraw.accountId,
        expenditureStatus: state.withdraw.expenditureStatus
    })
)
class Withdraw extends Component {

    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props)
        this.submit = ::this.submit
    }

    componentDidMount() {
        const { dispatch, location, resetExpenditureStatus } = this.props
        dispatch(actions.getBank())
        dispatch(actions.resetExpenditureStatus())

        if (location.query) {
            dispatch(actions.getLastBankAccount(location.query.accountId))
        }
    }

    componentWillReceiveProps(nextProps) {
        // 如果添加账户成功, 提现
        if (nextProps.accountId) {
            this.props.dispatch(actions.expenditure(this.amount))
        }

        if (nextProps.expenditureStatus) {
            notify(`提现${this.amount}元成功`, 'success', 1500, () =>
                this.context.router.replace('user')
            )
        }
    }

    addBankAccount(payload) {
        this.props.dispatch(actions.addBankAccount(Object.assign({}, payload, {
            accountId: this.props.location && this.props.location.query.accountId
        })))
    }

    submit(payload) {
        const { lastBankInfo, dispatch } = this.props

        if (payload.amount) {
            this.amount = payload.amount
            delete payload.amount
        }

        if (lastBankInfo) {
            for (let i in payload) {
                // 资料改变或者之前没有记录，则新增一条记录
                if (payload[i] !== lastBankInfo[i]) {
                    this.addBankAccount(payload)
                    return
                }
            }
        }

        // 否则直接提现
        dispatch(actions.expenditure(this.amount))
    }

    render() {
        const { bankInfo, lastBankInfo } = this.props
        const options = bankInfo.map(item => ({
            value: item.id,
            name: item.name
        }))

        return (
            <div className="lightBlue-bg">
                <Toast />
                <div className="title">
                    <p>账户提现</p>
                </div>
                {!lastBankInfo &&
                    <Form onSubmit={this.submit} name="withdraw">
                        <Form.Select
                            validate={['required']}
                            name="bankId"
                            labelValue="请选择银行"
                            options={options}
                        />
                        <Form.Input
                            hintText="银行卡号"
                            name="number"
                            validate={['required', 'bankNum']}
                            pattern="\d*"
                        />
                        <Form.Input
                            hintText="持卡人"
                            name="name"
                            validate={['required']}
                        />
                        <Form.Input
                            hintText="开户支行"
                            name="bankBranchFullName"
                        />
                        <Form.Input
                            hintText="提取金额"
                            name="amount"
                            type="number"
                            validate={['required', 'withdrawAmount']}
                        />
                        <Form.SubmitButton label="提现" className="bottom-button" />
                    </Form>
                }
                {lastBankInfo &&
                    <Form onSubmit={this.submit} name="withdraw">
                        <Form.Select
                            validate={['required']}
                            name="bankId"
                            labelValue="请选择银行"
                            defaultValue={lastBankInfo.bankId}
                            options={options}
                        />
                        <Form.Input
                            hintText="银行卡号"
                            name="number"
                            validate={['required', 'bankNum']}
                            pattern="\d*"
                            defaultValue={lastBankInfo.number}
                        />
                        <Form.Input
                            hintText="持卡人"
                            name="name"
                            validate={['required']}
                            defaultValue={lastBankInfo.name}
                        />
                        <Form.Input
                            hintText="开户支行"
                            name="bankBranchFullName"
                            defaultValue={lastBankInfo.bankBranchFullName}
                        />
                        <Form.Input
                            hintText="提取金额"
                            name="amount"
                            type="number"
                            validate={['required', 'withdrawAmount']}
                        />
                        <Form.SubmitButton label="提现" className="bottom-button" />
                    </Form>
                }
            </div>
        )
    }
}

export default Withdraw
