import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import { Link } from 'react-router'
import { ToggleDisplay } from '../internal'
import styles from './list.scss'

export default class List extends Component {
    static propTypes = {
        lists: PropTypes.array.isRequired
    }

    render() {
        const listStyle = classnames(
            'table-row',
            styles.lists
        )

        return (
            <div>
                {this.props.lists.map((list, i) =>
                    <ToggleDisplay key={i} show={list.show}>
                        <Link to={list.href}>
                            <div className={listStyle}>
                                <div className="cell">{list.listTitle}</div>
                                <div className="cell text-right">
                                    <span className={styles.listName}>{list.listName}</span>
                                    <i className="icon iconfont">&#xe601;</i>
                                </div>
                            </div>
                        </Link>
                    </ToggleDisplay>
                )}
            </div>
        )
    }
}
