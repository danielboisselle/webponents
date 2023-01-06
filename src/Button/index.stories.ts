import { html } from 'lit-html';
import { withKnobs, text, boolean, withWebComponentsKnobs } from '@open-wc/demoing-storybook';

import './index'

export default {
  title: 'Button',
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: {
    controls: {
      active: { type: 'boolean' },
      disabled: { type: 'boolean' },
      loading: { type: 'boolean' },
      label: { type: 'text' },
      size: { type: 'text' },
    },
  },
};

export const Default = () => {
  const label = text('Label', 'Click me');
  const disabled = boolean('Disabled', false);
  const loading = boolean('Loading', false);
  const active = boolean('Active', false);
  const size = text('Size', 'medium');

  return html`
    <wp-button
      .label=${label}
      ?disabled=${disabled}
      ?loading=${loading}
      ?active=${active}
      .size=${size}
    ></wp-button>
  `;
};
