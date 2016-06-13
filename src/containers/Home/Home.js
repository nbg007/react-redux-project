import React, { Component, PropTypes } from 'react'
import { Input, Button } from '../../components'

class Home extends Component {
    static propTypes = {

    };

    state = {

    };

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Input hintText="用户名" />
                <Input hintText="密码" type="password" style={{border: '0px'}} />
                <Button label="登录" fullWidth={true} />
            </div>
        )
    }
}

export default Home
