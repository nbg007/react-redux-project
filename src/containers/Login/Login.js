import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Form, Toast, notify } from '../../components'
import styles from './login.scss'
import img from '../../static/login/bg.jpg'
import { loginUser } from '../../redux/modules/Login/action'

@connect(
    state => ({
        loginState: state.login
    })
)
class Login extends Component {

    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props)
        this.login = ::this.login
    }

    componentWillReceiveProps(nextProps) {
        const { location, loginState } = nextProps

        if (!loginState.loginIn) {
            notify(loginState.err, 'error')
        } else {
            location.state && location.state.nextPathname ?
            this.context.router.replace(location.state.nextPathname) :
            this.context.router.replace('/home')
        }
    }

    login(data) {
        this.props.dispatch(loginUser(data.username, data.password))
    }

    render() {
        return (
            <div>
                <Toast />
                <img src={img} className="img-block" />
                <Form onSubmit={this.login}>
                    <Form.Input
                        hintText="用户名"
                        name="username"
                        validate={['required', 'maxLength']}
                    />
                    <Form.Input
                        hintText="密码"
                        name="password"
                        type="password"
                        style={{border: '0px'}}
                        validate={['required']}
                    />
                    <Form.SubmitButton label="登录" />
                </Form>
            </div>
        )
    }
}

export default Login
