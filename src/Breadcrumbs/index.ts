import { LitElement, html, css} from 'lit';
import { property, customElement } from 'lit/decorators'

interface BreadcrumbItem {
  href: string;
  label: string;
}

@customElement('breadcrumbs-element')
export class Breadcrumbs extends LitElement {
  @property()
  items: BreadcrumbItem[];

  static get styles() {
    return css`
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
    return html`
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          ${this.items.map(item => html`
              <li class="breadcrumb-item">
                <a href="${item.href}">${item.label}</a>
              </li>
              `)}
        </ol>
      </nav>
    `;
  }
}
