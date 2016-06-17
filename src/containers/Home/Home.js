import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Flex } from '../../components'
import { routeMap } from './routeMap'
import styles from './home.scss'

class Home extends Component {

    componentWillMount() {
        this.userInfo = JSON.parse(localStorage.userInfo)
    }

    render() {
        return (
            <div>
                <header className={styles.header}>
                    随时喷
                </header>
                <Link to="user" className="no-style">
                    <Flex className="list">
                        <Flex.Item flex={50}>
                            账户信息
                        </Flex.Item>
                        <Flex.Item flex={50} className={styles.menuIcon}>
                            <span className={styles.username}>{this.userInfo.username}</span>
                            <i className="icon iconfont">&#xe601;</i>
                        </Flex.Item>
                    </Flex>
                </Link>
                {this.userInfo.menu.map((item, i) =>
                    <Link key={i} to={routeMap[item.url]} className="no-style">
                        <Flex className="list">
                            <Flex.Item flex={50}>
                                {item.name}
                            </Flex.Item>
                            <Flex.Item flex={50} className={styles.menuIcon}>
                                <i className="icon iconfont">&#xe601;</i>
                            </Flex.Item>
                        </Flex>
                    </Link>
                )}
            </div>
        )
    }
}

export default Home
