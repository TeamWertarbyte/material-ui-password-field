/**
 * Notice: Some code was adapted from Material-UI's TextField component.
 *         Copyright (c) 2014 Call-Em-All (https://github.com/callemall/material-ui)
 */
import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton'
import Visibility from 'material-ui/svg-icons/action/visibility'
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off'
import transitions from 'material-ui/styles/transitions'
import {fade} from 'material-ui/utils/colorManipulator'

const getStyles = (props, context, state) => {
  const {
    textField: {
      disabledTextColor,
      errorColor
    }
  } = context.muiTheme

  const styles = {
    root: {
      position: 'relative',
      display: props.fullWidth ? 'block' : 'inline-block'
    },
    input: {
      paddingRight: 59,
      boxSizing: 'border-box'
    },
    hint: {
      position: 'relative',
      bottom: 2,
      fontSize: 12,
      lineHeight: '12px',
      color: props.errorText ? errorColor : fade(disabledTextColor, 0.5),
      transition: transitions.easeOut()
    },
    error: {
      color: errorColor
    },
    visibilityButton: {
      marginTop: props.floatingLabelText ? 22 : -2,
      marginLeft: 8,
      width: 48,
      height: 48,
      padding: 12,
      position: 'absolute',
      top: 0,
      right: 0
    },
    visibilityIcon: {
      opacity: !props.disabled && state.focused ? 0.54 : 0.38,
      width: 24,
      height: 24
    }
  }

  return styles
}

class PasswordField extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      focused: false,
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

  toggleVisibility () {
    this.setState({
      visible: !this.state.visible
    })
  }

  handleInputFocus (event) {
    this.setState({ focused: true })
    if (this.props.onFocus) {
      this.props.onFocus(event)
    }
  }

  handleInputBlur (event) {
    this.setState({ focused: false })
    if (this.props.onBlur) {
      this.props.onBlur(event)
    }
  }

  render () {
    const {
      disableButton,
      hintText,
      errorText,
      errorStyle,
      textFieldStyle,
      visibilityButtonStyle,
      visibilityIconStyle,
      style: {
        width,
        ...otherStyle
      },
      type, // eslint-disable-line
      ...other
    } = this.props

    const {
      visible
    } = this.state

    const styles = getStyles(this.props, this.context, this.state)

    const { prepareStyles } = this.context.muiTheme
    const actualErrorText = errorText || hintText

    return (
      <div style={{ ...styles.root, ...otherStyle }}>
        <TextField
          {...other}
          errorStyle={{...styles.error, ...errorStyle}}
          errorText={errorText}
          hintText={null}
          style={{ ...styles.input, width, ...textFieldStyle }}
          type={visible ? 'text' : 'password'}
          onFocus={(event) => this.handleInputFocus(event)}
          onBlur={(event) => this.handleInputBlur(event)}
        />
        {hintText && !errorText ? <div style={prepareStyles(styles.hint)}>{actualErrorText}</div> : null}
        <IconButton
          onTouchTap={() => this.toggleVisibility()}
          iconStyle={{...styles.visibilityIcon, ...visibilityIconStyle}}
          style={{...styles.visibilityButton, ...visibilityButtonStyle}}
          disabled={disableButton || other.disabled}
          tabIndex={0}
        >
          {visible ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </div>
    )
  }
}

PasswordField.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

PasswordField.defaultProps = {
  style: {}
}

if (process.env.NODE_ENV !== 'production') {
  PasswordField.propTypes = {
    ...TextField.propTypes,
    disableButton: PropTypes.bool,
    visible: PropTypes.bool,
    textFieldStyle: PropTypes.object,
    visibilityButtonStyle: PropTypes.object,
    visibilityIconStyle: PropTypes.object 
  }
  delete PasswordField.propTypes.multiLine
  delete PasswordField.propTypes.type
}

export default PasswordField
