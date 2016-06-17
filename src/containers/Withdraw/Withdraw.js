import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Form, Toast, notify } from '../../components'
import * as actions from '../../redux/modules/Withdraw/action'

@connect(
    state => ({
        bankInfo: state.withdraw.bankInfo
    })
)
class Withdraw extends Component {

    constructor(props) {
        super(props)
        this.submit = ::this.submit
    }

    componentDidMount() {
        const { dispatch, location } = this.props
        dispatch(actions.getBank())

        if (location && location.query && location.query.accountId) {
            dispatch(actions.getLastBankAccount(location.query.accountId))
        }
    }

    submit(data) {
        console.log(data)
    }

    render() {
        const { bankInfo } = this.props
        const options = bankInfo.map(item => ({
            value: item.id,
            name: item.name
        }))

        return (
            <div className="lightBlue-bg">
                <div className="title">
                    <p>账户提现</p>
                </div>
                <Form onSubmit={this.submit}>
                    <Form.Select
                        validate={['required']}
                        name="bankId"
                        labelValue="请选择银行"
                        // defaultValue="222"
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
            </div>
        )
    }
}

export default Withdraw
