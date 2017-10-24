import React from 'react'
import PropTypes from 'prop-types'
import Input, { InputAdornment } from 'material-ui/Input'
import IconButton from 'material-ui/IconButton'
import Visibility from 'material-ui/svg-icons/action/visibility'
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off'
// import ToggleIcon from 'material-ui-toggle-icon'

class PasswordField extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: props.visible
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.visible !== this.props.visible) {
      this.setState({
        visible: nextProps.visible
      })
    }
  }

  /**
   * Toogles the visibility the password.
   * @public
   */
  toggleVisibility () {
    this.setState({
      visible: !this.state.visible
    })
  }

  handleButtonMouseDown = (e) => {
    e.preventDefault()
  }

  render () {
    const {
      disableButton,
      visibilityButtonStyle,
      visibilityIconStyle,
      visible: visibleProp, // eslint-disable-line
      ...other
    } = this.props

    const {
      visible
    } = this.state

    return (
      <Input
        {...other}
        type={this.state.visible ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              onClick={this.toggleVisibility}
              onMouseDown={this.handleButtonMouseDown}
              disabled={disableButton}
            >
              {visible ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    )
  }
}

PasswordField.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

PasswordField.defaultProps = {
  disableButton: false,
  visible: false
}

PasswordField.propTypes = {
  ...Input.propTypes,
  disableButton: PropTypes.bool,
  visible: PropTypes.bool
}

export default PasswordField
