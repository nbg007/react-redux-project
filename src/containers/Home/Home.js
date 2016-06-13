import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Flex } from '../../components'
import { routeMap } from './routeMap'
import styles from './home.scss'

class Home extends Component {

    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    componentWillMount() {
        this.menu = JSON.parse(localStorage.userInfo).menu
        console.log(this.menu)
    }

    linkTo(url) {
        this.context.router.replace(url)
    }

    render() {
        return (
            <div>
                <header className={styles.header}>
                    随时喷
                </header>
                {this.menu.map((item, i) =>
                    <Link key={i} to={routeMap[item.url]} className="no-style">
                        <Flex className={styles.menu}>
                            <Flex.Item flex={85}>
                                {item.name}
                            </Flex.Item>
                            <Flex.Item flex={15} className={styles.menuIcon}>
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
