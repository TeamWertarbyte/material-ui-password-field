import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton'
import Visibility from 'material-ui/svg-icons/action/visibility'
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off'
import transitions from 'material-ui/styles/transitions'
import {fade} from 'material-ui/utils/colorManipulator'

const getStyles = (props, context, state) => {
  const {
    baseTheme,
    textField: {
      floatingLabelColor,
      focusColor,
      textColor,
      disabledTextColor,
      backgroundColor,
      hintColor,
      errorColor,
    },
  } = context.muiTheme

  const styles = {
    root: {
      display: 'flex',
      width: props.fullWidth ? '100%' : null
    },
    inputContainer: {
      flex: 1
    },
    input: {
      width: '100%',
      paddingRight: 56
    },
    hint: {
      position: 'relative',
      bottom: 2,
      fontSize: 12,
      lineHeight: '12px',
      color: props.errorText ? errorColor : fade(disabledTextColor, 0.5),
      transition: transitions.easeOut(),
    },
    error: {
      color: errorColor
    },
    visibilityButton: {
      margin: '22px 0 0 8px',
      width: 48,
      height: 48,
      padding: 12
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
  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }
  
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
      hintText,
      errorText,
      errorStyle,
      textFieldStyle,
      style,
      type,
      fullWidth,
      ...other
    } = this.props

    const {
      visible
    } = this.state
    
    const styles = getStyles(this.props, this.context, this.state)

    const { prepareStyles } = this.context.muiTheme
    const actualErrorText = errorText ? errorText : hintText

    return (
      <div style={{ ...styles.root, ...style }}>
        <div style={styles.inputContainer}>
          <TextField
            {...other}
            errorStyle={styles.error}
            errorText={errorText}
            hintText={null}
            style={{ ...styles.input, ...textFieldStyle }}
            type={visible ? 'text' : 'password'}
            onFocus={(event) => this.handleInputFocus(event)}
            onBlur={(event) => this.handleInputBlur(event)}
          />
          {hintText && !errorText ? <div style={prepareStyles(styles.hint)}>{actualErrorText}</div> : null}
        </div>
        <IconButton
          onTouchTap={() => this.toggleVisibility()}
          iconStyle={styles.visibilityIcon}
          style={styles.visibilityButton}
          disabled={other.disabled}
        >
          {visible ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </div>
    )
  }
}

if (process.env.NODE_ENV !== 'production') {
  PasswordField.propTypes = {
    ...TextField.propTypes,
    visible: PropTypes.bool,
    textFieldStyle: PropTypes.object
  }
  delete PasswordField.propTypes.multiLine
  delete PasswordField.propTypes.type
}

export default PasswordField
