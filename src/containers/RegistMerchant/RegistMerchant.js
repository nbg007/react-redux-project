import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import pinyin from 'pinyin'
import { Form, Headline, Toast, notify } from '../../components'
import { getMerchantType, registMerchant, initRegistMerchantStatus } from '../../redux/modules/RegistMerchant/action'

@connect(
    state => ({
        merchantType: state.registMerchant.merchantType,
        registStatus: state.registMerchant.registStatus,
        registErrMsg: state.registMerchant.registErrMsg
    })
)
class RegistMerchant extends Component {
    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    state = {
        username: ''
    };

    constructor(props) {
        super(props)
        this.submit = ::this.submit
        this.getUserName = ::this.getUserName
    }

    componentDidMount() {
        this.props.dispatch(initRegistMerchantStatus())
        this.props.dispatch(getMerchantType())
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.registStatus) {
            notify('注册成功', 'success', 1500, () => {
                this.context.router.replace('/home')
            })
        }

        if (nextProps.registErrMsg) {
            notify(nextProps.registErrMsg, 'warn')
            return
        }
    }

    getUserName(e) {
        const username = pinyin(e.target.value, {
            style: pinyin.STYLE_NORMAL
        }).join('')
        this.setState({ username })
    }

    submit(data) {
        this.props.dispatch(registMerchant({
            ...data,
            username: this.state.username
        }))
    }

    render() {
        const { merchantType } = this.props
        const options = merchantType.map(item => ({
            value: item.id,
            name: item.name
        }))

        return (
            <div className="lightBlue-bg">
                <Toast />
                <Headline text="注册二级商户" />
                <Form onSubmit={this.submit}>
                    <Form.Input
                        hintText="商户名"
                        name="realname"
                        validate={['required']}
                        onBlur={this.getUserName}
                    />
                    <Form.Input
                        hintText="商户全拼"
                        name="username"
                        value={this.state.username}
                        readOnly={true}
                    />
                    <Form.Input
                        hintText="手机号码"
                        name="mobile"
                        pattern="\d*"
                        validate={['required', 'mobile']}
                    />
                    <Form.Select
                        validate={['required']}
                        name="businessTypeId"
                        labelValue="商户类型"
                        options={options}
                    />
                    <Form.SubmitButton label="注册" className="bottom-button" />
                </Form>
            </div>
        )
    }
}

export default RegistMerchant
