import { ɵɵdefineInjectable, Injectable, Component, Input, EventEmitter, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function ListComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 11);
    ɵngcc0.ɵɵelementStart(2, "div", 12);
    ɵngcc0.ɵɵelementStart(3, "div", 13);
    ɵngcc0.ɵɵelementStart(4, "label", 14);
    ɵngcc0.ɵɵelement(5, "input", 15);
    ɵngcc0.ɵɵelement(6, "span", 16);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(7, "div", 17);
    ɵngcc0.ɵɵelementStart(8, "strong");
    ɵngcc0.ɵɵtext(9);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(10, "div", 18);
    ɵngcc0.ɵɵtext(11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(12, "div", 19);
    ɵngcc0.ɵɵelement(13, "span", 20);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const listItem_r1 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(9);
    ɵngcc0.ɵɵtextInterpolate(listItem_r1.name);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", listItem_r1.date, " ");
} }
class ComponentsLibraryService {
    constructor() { }
}
ComponentsLibraryService.ɵfac = function ComponentsLibraryService_Factory(t) { return new (t || ComponentsLibraryService)(); };
ComponentsLibraryService.ɵprov = ɵɵdefineInjectable({ factory: function ComponentsLibraryService_Factory() { return new ComponentsLibraryService(); }, token: ComponentsLibraryService, providedIn: "root" });
ComponentsLibraryService.ctorParameters = () => [];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ComponentsLibraryService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class ComponentsLibraryComponent {
    constructor() { }
    ngOnInit() { }
}
ComponentsLibraryComponent.ɵfac = function ComponentsLibraryComponent_Factory(t) { return new (t || ComponentsLibraryComponent)(); };
ComponentsLibraryComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ComponentsLibraryComponent, selectors: [["ui-components-library"]], inputs: { text: "text" }, decls: 23, vars: 0, consts: [[1, "list-group", "m-t-24", "row"], [1, "col-12", "list-group-header", "row"], [1, "col-2", "col-md-1", "table-header"], [1, "col-10", "col-sm-8", "col-md-6", "table-header"], [1, "subheading-01"], [1, "col-4", "d-md-block", "d-none", "table-header"], [1, "col-2", "col-md-1", "d-sm-block", "d-none"], [1, "list-group-content", "row"], [1, "table-column", "icon", "col-2", "col-md-1"], [1, "form-check", "v-center"], [1, "m-0"], ["type", "checkbox", "value", "option1", 1, "form-check-input"], [1, "label", "p-0"], [1, "table-column", "text-nowrap", "text-truncate", "col-10", "col-sm-8", "col-md-6"], [1, "table-column", "text-nowrap", "text-truncate", "col-4", "d-md-block", "d-none"], [1, "table-column", "icon", "col-2", "col-md-1", "d-sm-block", "d-none"], ["aria-hidden", "true", 1, "fs-h2", "cm-icon", "cm-icon-lock-locked"]], template: function ComponentsLibraryComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelement(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵelementStart(4, "div", 4);
        ɵngcc0.ɵɵtext(5, "Name");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "div", 5);
        ɵngcc0.ɵɵelementStart(7, "div", 4);
        ɵngcc0.ɵɵtext(8, "Date");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(9, "div", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(10, "div", 7);
        ɵngcc0.ɵɵelementStart(11, "div", 8);
        ɵngcc0.ɵɵelementStart(12, "div", 9);
        ɵngcc0.ɵɵelementStart(13, "label", 10);
        ɵngcc0.ɵɵelement(14, "input", 11);
        ɵngcc0.ɵɵelement(15, "span", 12);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(16, "div", 13);
        ɵngcc0.ɵɵelementStart(17, "strong");
        ɵngcc0.ɵɵtext(18, "ryan.bril@cmtelecom.com");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(19, "div", 14);
        ɵngcc0.ɵɵtext(20, " May 25, 2018 15:23 ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(21, "div", 15);
        ɵngcc0.ɵɵelement(22, "span", 16);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
ComponentsLibraryComponent.ctorParameters = () => [];
ComponentsLibraryComponent.propDecorators = {
    text: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ComponentsLibraryComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return []; }, { text: [{
            type: Input
        }] }); })();

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
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(); };
ListComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ListComponent, selectors: [["ui-list"]], outputs: { listChanged: "listChanged" }, decls: 15, vars: 1, consts: [[1, "row", "m-b-16"], [1, "col-12"], [1, "btn", "btn-primary", 3, "click"], [1, "list-group", "m-t-24", "row"], [1, "col-12", "list-group-header", "row"], [1, "col-2", "col-md-1", "table-header"], [1, "col-10", "col-sm-8", "col-md-6", "table-header"], [1, "subheading-01"], [1, "col-4", "d-md-block", "d-none", "table-header"], [1, "col-2", "col-md-1", "d-sm-block", "d-none"], [4, "ngFor", "ngForOf"], [1, "list-group-content", "row"], [1, "table-column", "icon", "col-2", "col-md-1"], [1, "form-check", "v-center"], [1, "m-0"], ["type", "checkbox", "value", "option1", 1, "form-check-input"], [1, "label", "p-0"], [1, "table-column", "text-nowrap", "text-truncate", "col-10", "col-sm-8", "col-md-6"], [1, "table-column", "text-nowrap", "text-truncate", "col-4", "d-md-block", "d-none"], [1, "table-column", "icon", "col-2", "col-md-1", "d-sm-block", "d-none"], ["aria-hidden", "true", 1, "fs-h2", "cm-icon", "cm-icon-lock-locked"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "button", 2);
        ɵngcc0.ɵɵlistener("click", function ListComponent_Template_button_click_2_listener() { return ctx.addListItem(); });
        ɵngcc0.ɵɵtext(3, "Add");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 3);
        ɵngcc0.ɵɵelementStart(5, "div", 4);
        ɵngcc0.ɵɵelement(6, "div", 5);
        ɵngcc0.ɵɵelementStart(7, "div", 6);
        ɵngcc0.ɵɵelementStart(8, "div", 7);
        ɵngcc0.ɵɵtext(9, "Name");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(10, "div", 8);
        ɵngcc0.ɵɵelementStart(11, "div", 7);
        ɵngcc0.ɵɵtext(12, "Date");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(13, "div", 9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(14, ListComponent_ng_container_14_Template, 14, 2, "ng-container", 10);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(14);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.listItems);
    } }, directives: [ɵngcc1.NgForOf], styles: [""] });
ListComponent.ctorParameters = () => [];
ListComponent.propDecorators = {
    listChanged: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ListComponent, [{
        type: Component,
        args: [{
                selector: 'ui-list',
                template: "<div class=\"row m-b-16\">\n  <div class=\"col-12\">\n    <button class=\"btn btn-primary\" (click)=\"addListItem()\">Add</button>\n  </div>\n</div>\n\n<div class=\"list-group m-t-24 row\">\n  <div class=\"col-12 list-group-header row\">\n    <div class=\"col-2 col-md-1 table-header\"></div>\n    <div class=\"col-10 col-sm-8 col-md-6 table-header\">\n      <div class=\"subheading-01\">Name</div>\n    </div>\n    <div class=\"col-4 d-md-block d-none table-header\">\n      <div class=\"subheading-01\">Date</div>\n    </div>\n    <div class=\"col-2 col-md-1 d-sm-block d-none\"></div>\n  </div>\n  <ng-container *ngFor=\"let listItem of listItems\">\n    <div class=\"list-group-content row\">\n      <div class=\"table-column icon col-2 col-md-1\">\n        <div class=\"form-check v-center\">\n          <label class=\"m-0\">\n            <input class=\"form-check-input\" type=\"checkbox\" value=\"option1\" />\n            <span class=\"label p-0\"></span>\n          </label>\n        </div>\n      </div>\n      <div\n        class=\"table-column text-nowrap text-truncate col-10 col-sm-8 col-md-6\"\n      >\n        <strong>{{ listItem.name }}</strong>\n      </div>\n      <div\n        class=\"table-column text-nowrap text-truncate col-4 d-md-block d-none\"\n      >\n        {{ listItem.date }}\n      </div>\n      <div class=\"table-column icon col-2 col-md-1 d-sm-block d-none\">\n        <span\n          class=\"fs-h2 cm-icon cm-icon-lock-locked\"\n          aria-hidden=\"true\"\n        ></span>\n      </div>\n    </div>\n  </ng-container>\n</div>\n",
                styles: [""]
            }]
    }], function () { return []; }, { listChanged: [{
            type: Output
        }] }); })();

class ComponentsLibraryModule {
}
ComponentsLibraryModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ComponentsLibraryModule });
ComponentsLibraryModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ComponentsLibraryModule_Factory(t) { return new (t || ComponentsLibraryModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ComponentsLibraryModule, { declarations: function () { return [ComponentsLibraryComponent, ListComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [ComponentsLibraryComponent, ListComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ComponentsLibraryModule, [{
        type: NgModule,
        args: [{
                declarations: [ComponentsLibraryComponent, ListComponent],
                imports: [CommonModule],
                exports: [ComponentsLibraryComponent, ListComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of components-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ComponentsLibraryComponent, ComponentsLibraryModule, ComponentsLibraryService, ListComponent as ɵa };

//# sourceMappingURL=components-library.js.map