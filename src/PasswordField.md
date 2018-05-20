The password field can be used to let the user enter a password without needing a second field to enter the password twice. Instead, it provides a toggle button to display the password in clear text so that the user can check what they typed.

In addition to the props documented above, the password field also supports all props that Material-UI's [Input](https://material-ui-next.com/api/input/) component supports.

```
<PasswordField
  defaultValue='p4ssw0rd'
/>
```

It can be used like Material-UI's `Input` component, allowing integration with `FormControl`.

```
const FormControl = require('@material-ui/core/FormControl').default;
const FormHelperText = require('@material-ui/core/FormHelperText').default;
const InputLabel = require('@material-ui/core/InputLabel').default;

<FormControl>
  <InputLabel htmlFor='name-label'>Password</InputLabel>
  <PasswordField
    id='name-label'
    placeholder='horse-battery-staple'
  />
  <FormHelperText>Enter your secret password</FormHelperText>
</FormControl>
```

When the password field is disabled, the button is less opaque.

```
<PasswordField
  disabled
/>
```

The password field also supports displaying errors, which is nice for form validation.

```
const FormControl = require('@material-ui/core/FormControl').default;
const FormHelperText = require('@material-ui/core/FormHelperText').default;
const InputLabel = require('@material-ui/core/InputLabel').default;

<FormControl error>
  <InputLabel htmlFor='error-label'>Password</InputLabel>
  <PasswordField
    id='error-label'
    value='123'
  />
  <FormHelperText>Your password is too short</FormHelperText>
</FormControl>
```
