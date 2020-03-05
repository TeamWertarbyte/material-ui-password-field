/* eslint-env jest */
import React from 'react'
import { mount, render } from 'enzyme'
import unwrap from '@material-ui/core/test-utils/unwrap'
import PasswordField from './PasswordField'

describe('<PasswordField />', () => {
  it('matches the previous snapshot', () => {
    const tree = render(<PasswordField />)
    expect(tree).toMatchSnapshot()
  })

  it('disables the button when the field is disabled', () => {
    const tree = mount(<PasswordField disabled />)
    const toggleButton = tree.findWhere((e) => e.name() === 'IconButton')
    expect(toggleButton.prop('disabled')).toBe(true)
  })

  it('hides the password by default', () => {
    const tree = mount(<PasswordField />)
    expect(tree.find('input').prop('type')).toBe('password')
  })

  it('shows the password by default if the visible prop is set to true', () => {
    const tree = mount(<PasswordField visible />)
    expect(tree.find('input').prop('type')).toBe('text')
  })

  it('shows and hides the password when changing the visible prop', () => {
    const tree = mount(<PasswordField />)
    expect(tree.find('input').prop('type')).toBe('password')
    tree.setProps({ visible: true })
    expect(tree.find('input').prop('type')).toBe('text')
    tree.setProps({ visible: false })
    expect(tree.find('input').prop('type')).toBe('password')
  })

  it('toggles the visibility when clicking the button', () => {
    const tree = mount(<PasswordField />)

    tree.findWhere((e) => e.name() === 'IconButton').simulate('click')
    expect(tree.find('input').prop('type')).toBe('text')

    tree.findWhere((e) => e.name() === 'IconButton').simulate('click')
    expect(tree.find('input').prop('type')).toBe('password')
  })

  it('toggles the visibility when calling toggleVisibility', () => {
    const UnstyledPasswordField = unwrap(PasswordField)
    const tree = mount(<UnstyledPasswordField classes={{}} />)

    tree.instance().toggleVisibility()
    tree.update()
    expect(tree.find('input').prop('type')).toBe('text')

    tree.instance().toggleVisibility()
    tree.update()
    expect(tree.find('input').prop('type')).toBe('password')
  })
})
