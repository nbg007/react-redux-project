import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import QRCode from 'qrcode.react'
import { getQcode } from '../../redux/modules/Qcode/action'
import styles from './qcode.scss'

@connect(
    state => ({
        qcodeUrl: state.qcode.url
    })
)
class Qcode extends Component {
    static propTypes = {

    };

    state = {

    };

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.dispatch(getQcode())
    }

    render() {
        return (
            <div className={styles.qcode}>
                {this.props.qcodeUrl &&
                    <QRCode value={this.props.qcodeUrl} size={200} />
                }
            </div>
        )
    }
}

export default Qcode
