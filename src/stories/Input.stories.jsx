import React, { useState } from 'react';
import Input from '../component/Input';

export default {
  title: 'Forms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    errorMessage: { control: 'text' },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    variant: { control: 'radio', options: ['filled', 'outlined', 'ghost'] },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    type: { control: 'text' },
    isDarkMode: { control: 'boolean' },
    className: { control: 'text' },
    onChange: { action: 'changed' },
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value || '');
  return (
    <div className={`rounded-2xl flex w-screen justify-center ${args.isDarkMode ? 'bg-gray-900 p-8' : 'bg-white p-8'}`}>
      <Input
        {...args}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          if (args.onChange) {
            args.onChange(e);
          }
        }}
      />
    </div>
  );
};

/**
 * This shows an outlined, medium-sized input with a label and helper text.
 */
export const Default = Template.bind({});
Default.args = {
  label: 'Email Address',
  placeholder: 'you@example.com',
  helperText: 'We will never share your email.',
};

/**
 *filled variant.
 */
export const Filled = Template.bind({});
Filled.args = {
  label: 'Username',
  placeholder: 'johndoe',
  variant: 'filled',
};

/**
 *  ghost variant.
 */
export const Ghost = Template.bind({});
Ghost.args = {
  label: 'Search',
  placeholder: 'Type to search...',
  variant: 'ghost',
};

/**
 * input in a disabled state.
 */
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Full Name',
  placeholder: 'John Doe',
  helperText: 'This field is disabled.',
  disabled: true,
};

/**
 * input in an invalid (error) state.
 */
export const Invalid = Template.bind({});
Invalid.args = {
  label: 'Password',
  type: 'password',
  invalid: true,
  errorMessage: 'Password must be at least 8 characters long.',
  placeholder: 'Enter password',
};

/**
 * small-sized input.
 */
export const Small = Template.bind({});
Small.args = {
  label: 'Small Input',
  size: 'sm',
  placeholder: 'Small size',
};

/**
 * large-sized input.
 */
export const Large = Template.bind({});
Large.args = {
  label: 'Large Input',
  size: 'lg',
  placeholder: 'Large size',
};

/**
 *  password input with a visibility toggle.
 */
export const PasswordWithToggle = Template.bind({});
PasswordWithToggle.args = {
  label: 'Password',
  type: 'password',
  placeholder: 'Enter your password',
  helperText: 'Click the icon to show/hide the password.',
};

/**
 * input with a clear button.
 */
export const ClearableInput = Template.bind({});
ClearableInput.args = {
  label: 'Clearable Input',
  type: 'text',
  placeholder: 'Type something...',
  value: 'Some value to clear',
  helperText: 'Click the X icon to clear the input.',
};

/**
 * the component in a dark theme.
 */
export const DarkTheme = Template.bind({});
DarkTheme.args = {
  label: 'Input (Dark Theme)',
  placeholder: 'Dark theme',
  isDarkMode: true,
  helperText: 'This component adapts to a dark theme.',
};

/**
 * an invalid input in a dark theme.
 */
export const InvalidDarkTheme = Template.bind({});
InvalidDarkTheme.args = {
  label: 'Password (Dark Theme)',
  type: 'password',
  invalid: true,
  isDarkMode: true,
  errorMessage: 'Password must be at least 8 characters long.',
  placeholder: 'Enter password',
};
