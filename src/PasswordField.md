The password field can be used to let the user enter a password without needing a second field to enter the password twice. Instead, it provides a toggle button to display the password in clear text so that the user can check what they typed.

In addition to the props documented above, the password field supports all props that Material-UI's [TextField](http://www.material-ui.com/v0.18.6/#/components/text-field) supports, except for `type` and `multiline`.

```
<PasswordField
  defaultValue='p4ssw0rd'
/>
```

Like a text field, it can have a floating label and a hint.

```
<PasswordField
  hintText='Enter your secret password'
  floatingLabelText='Password'
/>
```

When the password field is disabled, the button is less opaque.

```
<PasswordField
  hintText='Enter your secret password'
  floatingLabelText='Password'
  disabled
/>
```

The password field also supports displaying errors, which is nice for form validation.

```
<PasswordField
  hintText='Enter your secret password'
  floatingLabelText='Password'
  value='123'
  errorText='Your password is too short'
/>
```

If the default style doesn't fit your needs, you can tweak the styles of the button and the icon.

```
<PasswordField
  visibilityButtonStyle={{ transform: 'rotate(15deg)' }}
  visibilityIconStyle={{ color: 'blue' }}
  innerRef={(ref) => console.log(ref)}
/>
```
