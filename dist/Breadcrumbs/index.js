var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators';
let Breadcrumbs = class Breadcrumbs extends LitElement {
    items;
    static get styles() {
        return css `
      :host {
        display: flex;
        flex-wrap: wrap;
      }
      a {
        color: #000;
        text-decoration: none;
      }
      .breadcrumb {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-right: 48px;
      }
      .breadcrumb + .breadcrumb::before {
        content: '/';
        margin: 0 4px;
      }
      li {
        padding: 0 24px 0 0;
      }
    `;
    }
    render() {
        return html `
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          ${this.items.map(item => html `
              <li class="breadcrumb-item">
                <a href="${item.href}">${item.label}</a>
              </li>
              `)}
        </ol>
      </nav>
    `;
    }
};
__decorate([
    property()
], Breadcrumbs.prototype, "items", void 0);
Breadcrumbs = __decorate([
    customElement('breadcrumbs-element')
], Breadcrumbs);
export { Breadcrumbs };
//# sourceMappingURL=index.js.map