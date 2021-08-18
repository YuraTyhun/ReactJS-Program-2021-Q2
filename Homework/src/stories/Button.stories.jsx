import React from 'react';

import Button from '../components/Button';

import '../containers/ModalWindow/ModalWindow.scss';

export default {
  title: 'Button',
  component: Button
};

const Template = (args) => <Button {...args} />;

export const SubmitBtn = Template.bind({});
SubmitBtn.args = {
  title: 'Submit',
  className: 'modal-window-action-btn',
  type: 'submit',
  disabled: false
};
