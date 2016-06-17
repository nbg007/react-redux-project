import React, { Component, PropTypes } from 'react'
import Button from '../Button/Button'

class SubmitButton extends Component {
    static propTypes = {
        label: PropTypes.string,
        isShowDisable: PropTypes.bool
    };

    static defaultProps = {
        label: '确认',
        isShowDisable: false
    };

    static contextTypes = {
        isFormValid: PropTypes.func.isRequired,
        submit: PropTypes.func.isRequired
    }

    render () {
        const { label, isShowDisable } = this.props
        return(
            <Button
                label={label}
                disabled={isShowDisable && !this.context.isFormValid()}
                fullWidth={true}
                tap={this.context.submit}
            />
        )
    }
}

export default SubmitButton
