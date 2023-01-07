import { LitElement, html, property, customElement } from 'lit-element';

export class Card extends LitElement {
  @property({ type: Boolean, reflect: true }) interactive = false;
  @property({ type: String }) onClick = '';

  render() {
    return html`
      <div class="card" @click=${this.handleClick}>
        <slot></slot>
      </div>
    `;
  }

  handleClick() {
    if (this.interactive && this.onClick) {
      // Dispatch a custom event with the onClick value as the event detail
      this.dispatchEvent(new CustomEvent('onClick', { detail: this.onClick }));
    }
  }
}

customElements.define('wp-card', Card);