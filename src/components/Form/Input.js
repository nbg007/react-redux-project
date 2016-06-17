import React, { Component, PropTypes } from 'react'
import * as validators from './validators'
import styles from './input.scss'

export class Input extends Component {
    static propTypes = {
        hintText: PropTypes.string,
        type: PropTypes.string,
        style: PropTypes.object,
        validate: PropTypes.arrayOf(PropTypes.string)
    };

    static contextTypes = {
        update: PropTypes.func.isRequired,
        values: PropTypes.object.isRequired,
        registerValidation: PropTypes.func.isRequired
    };

    static defaultProps = {
        validate: []
    };

    state = {
        errors: []
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

    onBlur() {
        this.isValid(true)
    }

    onChange(e) {
        this.updateValue(e.target.value)
    }

    render () {
        const {
            hintText,
            type,
            style
        } = this.props

        return (
            <div className={styles.inputBox} style={style}>
                <input
                    type={type}
                    className={styles.input}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    required
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
