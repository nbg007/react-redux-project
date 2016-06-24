import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import pinyin from 'pinyin'
import { Form, Headline, Toast, notify } from '../../components'
import { getSalesmanType, registSalesman, initRegistStatus } from '../../redux/modules/RegistSales/action'

@connect(
    state => ({
        salesmanType: state.registSales.salesmanType,
        registStatus: state.registSales.registStatus,
        registErrMsg: state.registSales.registErrMsg
    })
)
class RegistSales extends Component {

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
        this.props.dispatch(initRegistStatus())
        this.props.dispatch(getSalesmanType())
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

    submit(data) {
        this.props.dispatch(registSalesman({...data, username: this.state.username}))
    }

    getUserName(e) {
        const username = pinyin(e.target.value, {
            style: pinyin.STYLE_NORMAL
        }).join('')
        this.setState({ username })
    }

    render() {
        const { salesmanType } = this.props
        const options = salesmanType.map(item => ({
            value: item.id,
            name: item.name
        }))

        return (
            <div className="lightBlue-bg">
                <Toast />
                <Headline text="注册二级业务员" />
                <Form onSubmit={this.submit}>
                    <Form.Input
                        hintText="姓名"
                        name="realname"
                        validate={['required']}
                        onBlur={this.getUserName}
                    />
                    <Form.Input
                        hintText="姓名全拼"
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
                        labelValue="业务员类型"
                        options={options}
                    />
                    <Form.SubmitButton label="注册" className="bottom-button" />
                </Form>
            </div>
        )
    }
}

export default RegistSales
