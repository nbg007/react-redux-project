import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'

let notificationWrapperId = 'notification-wrapper'
let defaultDuration = 2000 // ms
let animationDuration = 300 // ms

/* Colors */
const colorWhite = '#fff'
const colorError = '#F44336'
const colorSuccess = '#00C853'
const colorWarning = '#FF9800'
const colorInfo = '#2196F3'

class Toast extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired
    }

    state = {
        containerStyle: {}
    }

    componentWillUnmount() {
        clearTimeout(this.timerAutoHideId)
        clearTimeout(this.timerAnimationId)
    }

    getStyles() {
        let styles = {}

        const baseStyle = {
            position: 'fixed',
            right: '0%',
            top: '0%',
            left: '0%',
            textAlign: 'center',
            zIndex: '8888',
            height: '0.46rem',
            lineHeight: '0.46rem',
            fontSize: '14px',
            backgroundColor: colorInfo,
            color: colorWhite,
            transform: 'translateY(-100%)',
            WebkitTransform: 'translateY(-100%)',
            transition: 'all ' + animationDuration + 'ms ease',
            WebkitTransition: 'all ' + animationDuration + 'ms ease'
        }

        /* If type is set, merge toast action styles with base */
        switch (this.props.type) {
            case 'success':
                const successStyle = {
                    backgroundColor: colorSuccess
                }
                styles = Object.assign({}, baseStyle, successStyle)
                break

            case 'error':
                const errorStyle = {
                    backgroundColor: colorError
                }
                styles = Object.assign({}, baseStyle, errorStyle)
                break

            case 'warning':
                const warningStyle = {
                    backgroundColor: colorWarning
                }
                styles = Object.assign({}, baseStyle, warningStyle)
                break

            default:
                styles = Object.assign({}, baseStyle)
                break
        }

        return styles
    }

    getVisibleState(context) {
        const base = this.getStyles()

        // show
        const styleShow = {
            transform: 'translateY(0%)',
            WebkitTransform: 'translateY(0%)'
        }

         // wait 100ms after the component is called to animate toast.
        this.timerAnimationId = setTimeout(() =>
            context.updateStyle(base, styleShow), 100)

        const stylesHide = {
            transform: 'translateY(-100%)',
            WebkitTransform: 'translateY(-100%)'
        }

        this.timerAutoHideId = setTimeout(() =>
            context.updateStyle(base, stylesHide), this.props.duration)
    }

    updateStyle(base, update) {
        this.setState({containerStyle: Object.assign({}, base, update)})
    }

    getBaseStyle() {
        this.setState({containerStyle: this.getStyles()})
    }

    componentDidMount() {
        this.getBaseStyle()
        this.getVisibleState(this)
    }

    render() {
        const { text } = this.props
        const { containerStyle } = this.state

        return (
            <div style={containerStyle}>
                <span>{text}</span>
            </div>
        )
    }
}

/* Unmount React component */
function renderToast(text, type, duration) {
    ReactDOM.render(
        <Toast duration={duration} type={type} text={text} />,
        document.getElementById(notificationWrapperId)
    )
}

/* Unmount React component */
function hideToast() {
    const notificationWrapper = document.getElementById(notificationWrapperId)
    if (notificationWrapper) {
        ReactDOM.unmountComponentAtNode(notificationWrapper)
    }
}

/* Public functions */

/* Show Animated Toast Message. Export notification functions*/
export function notify(text, type, duration, callback = () => {}) {
    const notificationHasChildNodes = document.getElementById(notificationWrapperId).hasChildNodes()

    if (!notificationHasChildNodes) {
        let renderDuration = duration

        // Use default duration if not set.
        if (!renderDuration) {
            renderDuration = defaultDuration
        }

        // Render Component with Props.
        renderToast(text, type, renderDuration)

        // Unmount react component after the animation finished.
        setTimeout(function() {
            hideToast()
            callback()
        }, renderDuration + animationDuration)
    }
}

/* Export notification container */
export default class extends Component {
    render() {
        return (
            <div id={notificationWrapperId}></div>
        )
    }
}
