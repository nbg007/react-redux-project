import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CounterActions from '../../redux/modules/Counter/action'
import { Count, Footer } from '../../components'
import styles from './counter.scss'

@connect(
    state => ({
        counter: state.counter
    }),
    dispatch => ({
        actions: bindActionCreators(CounterActions, dispatch)
    })
)
class Counter extends Component {
    static propTypes = {
        counter: PropTypes.number.isRequired,
        actions: PropTypes.object.isRequired
    };

    render() {
        const { counter, actions } = this.props
        return (
            <div className="main-app-container">
                <div className="main-app-nav">Simple Redux Boilerplate</div>
                <Count counter={counter} actions={actions} />
                <div className={styles.demo}>这是内容</div>
                <Footer />
            </div>
        )
  }
}

// Counter.propTypes = {
//     counter: PropTypes.number.isRequired,
//     actions: PropTypes.object.isRequired
// }

/**
 * Keep in mind that 'state' isn't the state of local object, but your single
 * state in this Redux application. 'counter' is a property within our store/state
 * object. By mapping it to props, we can pass it to the child component Counter.
 */
// function mapStateToProps(state) {
//     return {
//         counter: state.counter
//     }
// }

/**
 * Turns an object whose values are 'action creators' into an object with the same
 * keys but with every action creator wrapped into a 'dispatch' call that we can invoke
 * directly later on. Here we imported the actions specified in 'CounterActions.js' and
 * used the bindActionCreators function Redux provides us.
 *
 * More info: http://redux.js.org/docs/api/bindActionCreators.html
 */
// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(CounterActions, dispatch)
//     }
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Counter)

export default Counter
