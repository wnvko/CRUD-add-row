import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@infragistics/igniteui-webcomponents-grids/grids/combined.js';
import NorthWindCRUDService from '../service/NorthWindCRUD-service';

@customElement('app-master-view')
export default class MasterView extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .grid {
      min-width: 600px;
      min-height: 300px;
      flex-grow: 1;
      flex-basis: 0;
    }
  `;

  constructor() {
    super();
    this.northWindCRUDService.getCategory().then((data) => {
      this.northWindCRUDCategory = data;
    }, (_err) => {
      // TODO: handle error here!
    });
  }

  private northWindCRUDService: NorthWindCRUDService = new NorthWindCRUDService();

  @property()
  private northWindCRUDCategory?: any[];

  private categoryRowAdded(args: CustomEvent<any>) {
    this.northWindCRUDService.postCategory(args.detail.data).then((res) => {
      this.northWindCRUDCategory![this.northWindCRUDCategory!.length - 1] = res;
      this.northWindCRUDCategory = [...this.northWindCRUDCategory!];
      if (!res.ok) {
        // TODO: handle error here!
      }
    });
  }

  private categoryRowDeleted(args: CustomEvent<any>) {
    this.northWindCRUDService.deleteCategory(args.detail.data.categoryId).then((res) => {
      if (!res.ok) {
        // TODO: handle error here!
      }
    });
  }

  private categoryRowEditDone(args: CustomEvent<any>) {
    if (!args.detail.isAddRow) {
      this.northWindCRUDService.putCategory(args.detail.rowData).then((res) => {
        if (!res.ok) {
          // TODO: handle error here!
        }
      });
    }
  }

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <link rel='stylesheet' href='node_modules/@infragistics/igniteui-webcomponents-grids/grids/themes/light/material.css'>
      <igc-grid .data="${this.northWindCRUDCategory}" primary-key="categoryId" display-density="cosy" row-editable="true" allow-filtering="true" filter-mode="excelStyleFilter" auto-generate="false" class="ig-typography grid" @rowAdded=${this.categoryRowAdded} @rowDeleted=${this.categoryRowDeleted} @rowEditDone=${this.categoryRowEditDone}>
        <igc-column field="categoryId" data-type="number" header="categoryId" sortable="true" selectable="false"></igc-column>
        <igc-column field="description" data-type="string" header="description" sortable="true" selectable="false"></igc-column>
        <igc-column field="name" data-type="string" header="name" sortable="true" selectable="false"></igc-column>
        <igc-action-strip>
          <igc-grid-pinning-actions></igc-grid-pinning-actions>
          <igc-grid-editing-actions ?add-row="${true}"></igc-grid-editing-actions>
        </igc-action-strip>
      </igc-grid>
    `;
  }
}
