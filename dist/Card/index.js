var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators';
let Card = class Card extends LitElement {
    interactive = false;
    onClick = '';
    render() {
        return html `
      <div class="card" @click=${this.handleClick}>
        <slot></slot>
      </div>
    `;
    }
    handleClick() {
        if (this.interactive && this.onClick) {
            this.dispatchEvent(new CustomEvent('onClick', { detail: this.onClick }));
        }
    }
};
__decorate([
    property({ type: Boolean, reflect: true })
], Card.prototype, "interactive", void 0);
__decorate([
    property({ type: String })
], Card.prototype, "onClick", void 0);
Card = __decorate([
    customElement('wp-card')
], Card);
export { Card };
//# sourceMappingURL=index.js.map