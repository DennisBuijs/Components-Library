import { ɵɵdefineInjectable, Injectable, Component, Input, EventEmitter, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class ComponentsLibraryService {
    constructor() { }
    testFunction(testText) {
        console.log(testText);
    }
}
ComponentsLibraryService.ɵprov = ɵɵdefineInjectable({ factory: function ComponentsLibraryService_Factory() { return new ComponentsLibraryService(); }, token: ComponentsLibraryService, providedIn: "root" });
ComponentsLibraryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ComponentsLibraryService.ctorParameters = () => [];

class ComponentsLibraryComponent {
    constructor() { }
    ngOnInit() { }
}
ComponentsLibraryComponent.decorators = [
    { type: Component, args: [{
                selector: 'ui-components-library',
                template: `
    <div class="list-group m-t-24 row">
      <div class="col-12 list-group-header row">
        <div class="col-2 col-md-1 table-header"></div>
        <div class="col-10 col-sm-8 col-md-6 table-header">
          <div class="subheading-01">Name</div>
        </div>
        <div class="col-4 d-md-block d-none table-header">
          <div class="subheading-01">Date</div>
        </div>
        <div class="col-2 col-md-1 d-sm-block d-none"></div>
      </div>
      <div class="list-group-content row">
        <div class="table-column icon col-2 col-md-1">
          <div class="form-check v-center">
            <label class="m-0">
              <input class="form-check-input" type="checkbox" value="option1" />
              <span class="label p-0"></span>
            </label>
          </div>
        </div>
        <div
          class="table-column text-nowrap text-truncate col-10 col-sm-8 col-md-6"
        >
          <strong>ryan.bril@cmtelecom.com</strong>
        </div>
        <div
          class="table-column text-nowrap text-truncate col-4 d-md-block d-none"
        >
          May 25, 2018 15:23
        </div>
        <div class="table-column icon col-2 col-md-1 d-sm-block d-none">
          <span
            class="fs-h2 cm-icon cm-icon-lock-locked"
            aria-hidden="true"
          ></span>
        </div>
      </div>
    </div>
  `
            },] }
];
ComponentsLibraryComponent.ctorParameters = () => [];
ComponentsLibraryComponent.propDecorators = {
    text: [{ type: Input }]
};

class ListComponent {
    constructor() {
        this.listItems = [];
        this.listChanged = new EventEmitter();
    }
    ngOnInit() { }
    addListItem() {
        this.listItems.push({
            name: this.listItems.length + 1,
            date: new Date().toDateString(),
        });
        this.listChanged.emit(this.listItems);
    }
}
ListComponent.decorators = [
    { type: Component, args: [{
                selector: 'ui-list',
                template: "<div class=\"row m-b-16\">\n  <div class=\"col-12\">\n    <button class=\"btn btn-primary\" (click)=\"addListItem()\">Add</button>\n  </div>\n</div>\n\n<div class=\"list-group m-t-24 row\">\n  <div class=\"col-12 list-group-header row\">\n    <div class=\"col-2 col-md-1 table-header\"></div>\n    <div class=\"col-10 col-sm-8 col-md-6 table-header\">\n      <div class=\"subheading-01\">Name</div>\n    </div>\n    <div class=\"col-4 d-md-block d-none table-header\">\n      <div class=\"subheading-01\">Date</div>\n    </div>\n    <div class=\"col-2 col-md-1 d-sm-block d-none\"></div>\n  </div>\n  <ng-container *ngFor=\"let listItem of listItems\">\n    <div class=\"list-group-content row\">\n      <div class=\"table-column icon col-2 col-md-1\">\n        <div class=\"form-check v-center\">\n          <label class=\"m-0\">\n            <input class=\"form-check-input\" type=\"checkbox\" value=\"option1\" />\n            <span class=\"label p-0\"></span>\n          </label>\n        </div>\n      </div>\n      <div\n        class=\"table-column text-nowrap text-truncate col-10 col-sm-8 col-md-6\"\n      >\n        <strong>{{ listItem.name }}</strong>\n      </div>\n      <div\n        class=\"table-column text-nowrap text-truncate col-4 d-md-block d-none\"\n      >\n        {{ listItem.date }}\n      </div>\n      <div class=\"table-column icon col-2 col-md-1 d-sm-block d-none\">\n        <span\n          class=\"fs-h2 cm-icon cm-icon-lock-locked\"\n          aria-hidden=\"true\"\n        ></span>\n      </div>\n    </div>\n  </ng-container>\n</div>\n",
                styles: [""]
            },] }
];
ListComponent.ctorParameters = () => [];
ListComponent.propDecorators = {
    listChanged: [{ type: Output }]
};

class ComponentsLibraryModule {
}
ComponentsLibraryModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ComponentsLibraryComponent, ListComponent],
                imports: [CommonModule],
                exports: [ComponentsLibraryComponent, ListComponent],
            },] }
];

/*
 * Public API Surface of components-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ComponentsLibraryComponent, ComponentsLibraryModule, ComponentsLibraryService, ListComponent as ɵa };
//# sourceMappingURL=components-library.js.map
