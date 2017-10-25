import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import TextField from 'material-ui/TextField'
import PasswordField from '../src/PasswordField'

function themed (children) {
  return (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}>
      {children}
    </div>
  )
}

storiesOf('PasswordField', module)
  .add('normal with hint text', () => themed(
    <PasswordField
      hintText='At least 8 characters'
      floatingLabelText='Enter your password'
      style={{ width: 400 }}
    />
  ))
  .add('normal without floating label', () => themed(
    <PasswordField
      hintText='At least 8 characters'
      style={{ width: 400 }}
    />
  ))
  .add('normal without any labels', () => themed(
    <PasswordField
      style={{ width: 400 }}
    />
  ))
  .add('visible', () => themed(
    <PasswordField
      hintText='At least 8 characters'
      floatingLabelText='Enter your password'
      value='password'
      visible
      style={{ width: 400 }}
    />
  ))
  .add('nonvisible', () => themed(
    <PasswordField
      hintText='At least 8 characters'
      floatingLabelText='Enter your password'
      value='password'
      style={{ width: 400 }}
    />
  ))
  .add('disabled', () => themed(
    <PasswordField
      hintText='At least 8 characters'
      floatingLabelText='Enter your password'
      value='password'
      disabled
      style={{ width: 400 }}
    />
  ))
  .add('error', () => themed(
    <PasswordField
      hintText='At least 8 characters'
      floatingLabelText='Enter your password'
      errorText="The email and password you entered don't match"
      style={{ width: 400 }}
    />
  ))
  .add('controlled', () => themed(
    <PasswordField
      hintText='At least 8 characters'
      floatingLabelText='Enter your password'
      value=''
      onChange={action('onChange')}
    />
  ))
  .add('fullWidth', () => themed(
    <PasswordField
      hintText='At least 8 characters'
      floatingLabelText='Enter your password'
      fullWidth
    />
  ))
  .add('with custom visibility button styles', () => themed(
    <PasswordField
      hintText='At least 8 characters'
      floatingLabelText='Enter your password'
      value=''
      visibilityButtonStyle={{backgroundColor: 'rgba(0, 0, 0, 0.1)'}}
    />
  ))
  .add('with custom visibility icon styles', () => themed(
    <PasswordField
      hintText='At least 8 characters'
      floatingLabelText='Enter your password'
      value=''
      visibilityIconStyle={{fill: 'red'}}
    />
  ))
  .add('vs TextField', () => themed(
    <div>
      <div>
        <PasswordField
          floatingLabelText='This is a PasswordField'
        />
      </div>
      <div>
        <TextField
          floatingLabelText='This is a TextField'
        />
      </div>
      <div>
        <PasswordField
          floatingLabelText='This is a PasswordField'
          fullWidth
        />
      </div>
      <div>
        <TextField
          floatingLabelText='This is a TextField'
          fullWidth
        />
      </div>
    </div>
  ))
