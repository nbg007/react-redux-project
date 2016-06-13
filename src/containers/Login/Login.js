import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Input, Button, Form, SubmitButton } from '../../components'
import styles from './login.scss'
import img from '../../static/login/bg.jpg'
import { loginUser } from '../../redux/modules/Login/action'

@connect(
    state => ({
        loginState: state.login
    })
)
class Login extends Component {
    static propTypes = {

    };

    state = {

    };

    constructor(props) {
        super(props)
        this.login = ::this.login
    }

    login(data) {
        this.props.dispatch(loginUser(data.username, data.password))
    }

    render() {
        return (
            <div>
                <img src={img} className="img-block" />
                <Form onSubmit={this.login}>
                    <Input hintText="用户名" name="username" validate={['required', 'maxLength']} />
                    <Input hintText="密码" name="password" type="password" style={{border: '0px'}} validate={['required']} />
                    <SubmitButton label="登录" />
                </Form>
            </div>
        )
    }
}

export default Login
