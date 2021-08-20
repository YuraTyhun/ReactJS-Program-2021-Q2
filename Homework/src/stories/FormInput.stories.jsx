import React from 'react';
import classNames from 'classnames';

import '../components/MovieForm/MovieForm.scss';
import '../containers/ModalWindow/ModalWindow.scss';

const FormInput = ({
  label, name, type, placeholder, readOnly, error
}) => {
  return (
    <div className="form-input-container">
      <label htmlFor={name} className="form-input-label">{label}</label>
      <input
        className="form-input-field"
        name={name}
        type={type}
        placeholder={placeholder}
        readOnly={readOnly}
      />
      {error && <span className="form-input-error">{error}</span>}
    </div>
  )
}

export default {
  title: 'FormInput',
  component: FormInput,
  argTypes: {
    type: {
      options: ['date', 'text', 'number', 'password'],
      control: {
        type: 'select'
      }
    }
  }
};

const Template = (args) => <FormInput {...args}/>

export const Input = Template.bind({});

Input.args = {
  label: 'Select release date',
  name: 'release_date',
  type: 'date',
  placeholder: 'Enter the date',
  readOnly: false,
  isIdField: false,
  error: 'Test error'
};