import { Story } from '@storybook/web-components';
import { html } from 'lit-element';
import './index'

export default {
  title: 'Example/Button',
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
