import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import * as validators from './validators'
import styles from './form.scss'

class Select extends Component {

    static propTypes = {
        options: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
            }).isRequired
        ).isRequired,
        labelValue: PropTypes.string,
        defaultValue: PropTypes.string
    };

    static contextTypes = {
        update: PropTypes.func.isRequired,
        values: PropTypes.object.isRequired,
        registerValidation: PropTypes.func.isRequired
    };

    state = {
        errors: [],
        selectHasValue: false,
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
                selectHasValue: true,
                value: defaultValue
            })
        }
    }

    componentWillUnmount() {
        this.removeValidationFromContext()
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

    updateValue(value) {
        this.context.update(this.props.name, value)

        if (this.state.errors.length) {
            setTimeout(() => this.isValid(true), 0)
        }
    }

    onChange(e) {
        if (e.target.value) {
            this.setState({
                selectHasValue: true,
                value: e.target.value
            })
        }
        this.updateValue(e.target.value)
    }

    onBlur() {
        this.isValid(true)
    }

    render () {
        const { options, labelValue } = this.props

        return(
            <div className={styles.selectBox}>
                <select
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    className={classnames(styles.select, {[styles.labelValue]: !this.state.selectHasValue})}
                    value={this.state.value}
                >
                    {labelValue && <option value="" disabled={this.state.selectHasValue}>{labelValue}</option>}
                    {options.map(item => <option value={item.value} key={item.value}>{item.name}</option>)}
                </select>
                {this.state.selectHasValue && <label className={styles.floatLabel}>{labelValue}</label>}
                {this.state.errors.length ? (
                    <div className={styles.errMsg}>
                        {this.state.errors.map((error, i) => <div key={i}>{error}</div>)}
                    </div>
                ) : null}
            </div>
        )
    }
}

export default Select
