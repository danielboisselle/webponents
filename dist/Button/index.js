var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators';
let Button = class Button extends LitElement {
    active = false;
    disabled = false;
    loading = false;
    label = 'Click me';
    size = 'medium';
    render() {
        let className = 'button';
        if (this.active)
            className += ' active';
        if (this.size)
            className += ` ${this.size}`;
        return html `
      <button class=${className.concat(' text-3xl font-bold underline')} ?disabled=${this.disabled || this.loading}>
        ${this.loading ? 'Loading...' : this.label}
      </button>
    `;
    }
};
__decorate([
    property({ type: Boolean })
], Button.prototype, "active", void 0);
__decorate([
    property({ type: Boolean })
], Button.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], Button.prototype, "loading", void 0);
__decorate([
    property({ type: String })
], Button.prototype, "label", void 0);
__decorate([
    property({ type: String })
], Button.prototype, "size", void 0);
Button = __decorate([
    customElement('wp-button')
], Button);
export { Button };
//# sourceMappingURL=index.js.map