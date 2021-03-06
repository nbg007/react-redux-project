import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import * as validators from './validators'
import styles from './form.scss'

export class Input extends Component {
    static propTypes = {
        hintText: PropTypes.string,
        type: PropTypes.string,
        style: PropTypes.object,
        validate: PropTypes.arrayOf(PropTypes.string),
        pattern: PropTypes.string,
        defaultValue: PropTypes.string,
        onBlur: PropTypes.func,
        value: PropTypes.string,
        readOnly: PropTypes.bool
    };

    static contextTypes = {
        update: PropTypes.func.isRequired,
        values: PropTypes.object.isRequired,
        registerValidation: PropTypes.func.isRequired
    };

    static defaultProps = {
        validate: [],
        readOnly: false
    };

    state = {
        errors: [],
        inputHasValue: false,
        value: ''
    };

    constructor(props) {
        super(props)
        this.onChange = ::this.onChange
        this.onBlur = ::this.onBlur
    }

    componentWillMount() {
        this.removeValidationFromContext = this.context.registerValidation(show =>
            this.isValid(show)
        )

        // 如果props有值，则更新redux中的state，然后把selectHasValue设置为true
        const { defaultValue } = this.props

        if (defaultValue) {
            this.updateValue(defaultValue)
            this.setState({
                inputHasValue: true,
                value: defaultValue
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value) {
            // this.updateValue(nextProps.value)
            this.setState({
                value: nextProps.value,
                inputHasValue: true
            })
        }
    }

    componentWillUnmount() {
        this.removeValidationFromContext()
    }

    updateValue(value) {
        this.context.update(this.props.name, value)

        if (this.state.errors.length) {
            setTimeout(() => this.isValid(true), 0)
        }
    }

    isValid(showErrors) {
        const errors = this.props.validate
            .reduce((memo, currentName) =>
                memo.concat(validators[currentName](
                this.context.values[this.props.name]
            )), [])

        if (showErrors) {
            this.setState({ errors })
        }

        return !errors.length
    }

    onBlur(e) {
        e.preventDefault()
        if (e.target.value) {
            this.setState({ inputHasValue: true })
        }
        this.isValid(true)
        if (this.props.onBlur) {
            this.props.onBlur(e)
        }
    }

    onChange(e) {
        this.updateValue(e.target.value)
        this.setState({ value: e.target.value })
    }

    render () {
        const {
            hintText,
            type,
            style,
            pattern,
            readOnly
        } = this.props

        return (
            <div className={styles.inputBox} style={style}>
                <input
                    type={type}
                    className={classnames(styles.input, {
                        [styles.inputHasValue]: this.state.inputHasValue
                    })}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    pattern={pattern}
                    value={this.state.value}
                    readOnly={readOnly}
                />
                <label>{hintText}</label>
                {this.state.errors.length ? (
                    <div className={styles.errMsg}>
                        {this.state.errors.map((error, i) => <div key={i}>{error}</div>)}
                    </div>
                ) : null}
            </div>
        )
    }
}

export default Input
