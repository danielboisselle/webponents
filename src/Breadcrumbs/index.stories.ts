import { Story, Meta } from '@storybook/web-components';
import { html } from 'lit-element';

import './index'

export default {
  title: 'Breadcrumb',
} as Meta;

const items = Array(3).fill(null).map((item, i) => ({ href: `href-url-${i}`, label: `LABEL-${i}` }))

const Template: Story = (args) => html`<breadcrumbs-element .items=${args.items} ></breadcrumbs-element>`

export const Basic = Template.bind({});

Basic.args = {
  items
}