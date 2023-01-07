import { LitElement, html, property, PropertyValues } from 'lit-element';

export class Button extends LitElement {
  @property({ type: Boolean }) active = false;
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) loading = false;
  @property({ type: String }) label = 'Click me';
  @property({ type: String }) size = 'medium';

  render() {
    let className = 'button';
    if (this.active) className += ' active';
    if (this.size) className += ` ${this.size}`;

    return html`
      <button class=${className} ?disabled=${this.disabled || this.loading}>
        ${this.loading ? 'Loading...' : this.label}
      </button>
    `;
  }
}

customElements.define('wp-button', Button);
