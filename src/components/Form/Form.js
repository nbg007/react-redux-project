import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import without from 'lodash.without'
import * as actions from '../../redux/modules/Form/action'
import Input from './Input'
import SubmitButton from './SubmitButton'
import Select from './Select'

const noop = () => undefined

@connect(
    state => ({
        values: state.form
    }),
    actions
)
class Form extends Component {
    static propTypes = {
        children: PropTypes.node,
        values: PropTypes.object,
        update: PropTypes.func,
        reset: PropTypes.func,
        onSubmit: PropTypes.func,
        shouldReset: PropTypes.bool
    };

    static childContextTypes = {
        update: PropTypes.func,
        reset: PropTypes.func,
        submit: PropTypes.func,
        values: PropTypes.object,
        registerValidation: PropTypes.func,
        isFormValid: PropTypes.func
    };

    getChildContext() {
        return {
            update: this.props.update,
            reset: this.props.reset,
            submit: this.submit,
            values: this.props.values,
            registerValidation: this.registerValidation,
            isFormValid: this.isFormValid
        }
    }

    static defaultProps = {
        onSubmit: noop
    };

    static SubmitButton = SubmitButton;
    static Select = Select;

    static Input = Input;

    validations = [];

    constructor(props) {
        super(props)
        this.name = props.name
        this.registerValidation = ::this.registerValidation
        this.isFormValid = ::this.isFormValid
        this.submit = ::this.submit
    }

    componentWillUnmount() {
        this.props.reset()
    }

    registerValidation(isValidFunc) {
        this.validations = [...this.validations, isValidFunc]
        return this.removeValidation.bind(this, isValidFunc)
    }

    removeValidation(ref) {
        this.validations = without(this.validations, ref)
    }

    isFormValid(showErrors) {
        return this.validations.reduce((memo, isValidFunc) =>
            isValidFunc(showErrors) && memo, true)
    }


    submit(e) {
        e.preventDefault()
        if (this.isFormValid(true)) {
            this.props.onSubmit(Object.assign({}, this.props.values))
            // this.props.reset()
        }
    }

    render () {
        return (
            <form>
                {this.props.children}
            </form>
        )
    }
}

export default Form
