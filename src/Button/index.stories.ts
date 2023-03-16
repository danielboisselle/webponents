import { Story } from '@storybook/web-components';
import { html } from 'lit';
import '../index'

export default {
  title: 'Button',
  component: 'wp-button'
}

const Template: Story = (args) => html`
  <wp-button
    .label="${args.label}"
    .loading="${args.loading}"
    .disabled="${args.disabled}"
    ></wp-button>
`;

export const Default = Template.bind({});

Default.args = {
  label: 'My Label',
  loading: false,
  disabled: false,
};

export const Disabled = Template.bind({});

Disabled.args = {
  label: 'My Label',
  loading: false,
  disabled: true,
};