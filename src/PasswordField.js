import React from 'react'
import PropTypes from 'prop-types'
import Input, { InputAdornment } from 'material-ui/Input'
import IconButton from 'material-ui/IconButton'
import { withStyles } from 'material-ui/styles'
import Visibility from 'material-ui-icons/Visibility'
import VisibilityOff from 'material-ui-icons/VisibilityOff'
import ToggleIcon from 'material-ui-toggle-icon'

const styles = {
  root: {
    // TODO remove this when beta.18 is published, see material-ui#8825
    display: 'inline-flex',
    alignItems: 'baseline'
  },
  input: {
    // TODO remove this when beta.18 is published, see material-ui#8825
    width: '100%'
  }
}

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
  toggleVisibility = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  handleButtonMouseDown = (e) => {
    e.preventDefault()
  }

  render () {
    const {
      classes,
      buttonDisabled,
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
        classes={{ root: classes.root, input: classes.input }}
        type={this.state.visible ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position='end' className={classes.adornment}>
            <IconButton
              onClick={this.toggleVisibility}
              onMouseDown={this.handleButtonMouseDown}
              disabled={other.disabled || buttonDisabled}
            >
              <ToggleIcon
                on={visible}
                onIcon={<Visibility />}
                offIcon={<VisibilityOff />}
              />
            </IconButton>
          </InputAdornment>
        }
      />
    )
  }
}

PasswordField.defaultProps = {
  buttonDisabled: false,
  visible: false
}

PasswordField.propTypes = {
  ...Input.propTypes,
  buttonDisabled: PropTypes.bool,
  visible: PropTypes.bool
}

export default withStyles(styles)(PasswordField)
