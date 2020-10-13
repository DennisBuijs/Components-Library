(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('components-library', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global['components-library'] = {}, global.ng.core, global.ng.common));
}(this, (function (exports, i0, common) { 'use strict';

    var ComponentsLibraryService = /** @class */ (function () {
        function ComponentsLibraryService() {
        }
        ComponentsLibraryService.prototype.testFunction = function (testText) {
            console.log(testText);
        };
        return ComponentsLibraryService;
    }());
    ComponentsLibraryService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ComponentsLibraryService_Factory() { return new ComponentsLibraryService(); }, token: ComponentsLibraryService, providedIn: "root" });
    ComponentsLibraryService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    ComponentsLibraryService.ctorParameters = function () { return []; };

    var ComponentsLibraryComponent = /** @class */ (function () {
        function ComponentsLibraryComponent() {
        }
        ComponentsLibraryComponent.prototype.ngOnInit = function () { };
        return ComponentsLibraryComponent;
    }());
    ComponentsLibraryComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ui-components-library',
                    template: "\n    <div class=\"list-group m-t-24 row\">\n      <div class=\"col-12 list-group-header row\">\n        <div class=\"col-2 col-md-1 table-header\"></div>\n        <div class=\"col-10 col-sm-8 col-md-6 table-header\">\n          <div class=\"subheading-01\">Name</div>\n        </div>\n        <div class=\"col-4 d-md-block d-none table-header\">\n          <div class=\"subheading-01\">Date</div>\n        </div>\n        <div class=\"col-2 col-md-1 d-sm-block d-none\"></div>\n      </div>\n      <div class=\"list-group-content row\">\n        <div class=\"table-column icon col-2 col-md-1\">\n          <div class=\"form-check v-center\">\n            <label class=\"m-0\">\n              <input class=\"form-check-input\" type=\"checkbox\" value=\"option1\" />\n              <span class=\"label p-0\"></span>\n            </label>\n          </div>\n        </div>\n        <div\n          class=\"table-column text-nowrap text-truncate col-10 col-sm-8 col-md-6\"\n        >\n          <strong>ryan.bril@cmtelecom.com</strong>\n        </div>\n        <div\n          class=\"table-column text-nowrap text-truncate col-4 d-md-block d-none\"\n        >\n          May 25, 2018 15:23\n        </div>\n        <div class=\"table-column icon col-2 col-md-1 d-sm-block d-none\">\n          <span\n            class=\"fs-h2 cm-icon cm-icon-lock-locked\"\n            aria-hidden=\"true\"\n          ></span>\n        </div>\n      </div>\n    </div>\n  "
                },] }
    ];
    ComponentsLibraryComponent.ctorParameters = function () { return []; };
    ComponentsLibraryComponent.propDecorators = {
        text: [{ type: i0.Input }]
    };

    var ListComponent = /** @class */ (function () {
        function ListComponent() {
            this.listItems = [];
            this.listChanged = new i0.EventEmitter();
        }
        ListComponent.prototype.ngOnInit = function () { };
        ListComponent.prototype.addListItem = function () {
            this.listItems.push({
                name: this.listItems.length + 1,
                date: new Date().toDateString(),
            });
            this.listChanged.emit(this.listItems);
        };
        return ListComponent;
    }());
    ListComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ui-list',
                    template: "<div class=\"row m-b-16\">\n  <div class=\"col-12\">\n    <button class=\"btn btn-primary\" (click)=\"addListItem()\">Add</button>\n  </div>\n</div>\n\n<div class=\"list-group m-t-24 row\">\n  <div class=\"col-12 list-group-header row\">\n    <div class=\"col-2 col-md-1 table-header\"></div>\n    <div class=\"col-10 col-sm-8 col-md-6 table-header\">\n      <div class=\"subheading-01\">Name</div>\n    </div>\n    <div class=\"col-4 d-md-block d-none table-header\">\n      <div class=\"subheading-01\">Date</div>\n    </div>\n    <div class=\"col-2 col-md-1 d-sm-block d-none\"></div>\n  </div>\n  <ng-container *ngFor=\"let listItem of listItems\">\n    <div class=\"list-group-content row\">\n      <div class=\"table-column icon col-2 col-md-1\">\n        <div class=\"form-check v-center\">\n          <label class=\"m-0\">\n            <input class=\"form-check-input\" type=\"checkbox\" value=\"option1\" />\n            <span class=\"label p-0\"></span>\n          </label>\n        </div>\n      </div>\n      <div\n        class=\"table-column text-nowrap text-truncate col-10 col-sm-8 col-md-6\"\n      >\n        <strong>{{ listItem.name }}</strong>\n      </div>\n      <div\n        class=\"table-column text-nowrap text-truncate col-4 d-md-block d-none\"\n      >\n        {{ listItem.date }}\n      </div>\n      <div class=\"table-column icon col-2 col-md-1 d-sm-block d-none\">\n        <span\n          class=\"fs-h2 cm-icon cm-icon-lock-locked\"\n          aria-hidden=\"true\"\n        ></span>\n      </div>\n    </div>\n  </ng-container>\n</div>\n",
                    styles: [""]
                },] }
    ];
    ListComponent.ctorParameters = function () { return []; };
    ListComponent.propDecorators = {
        listChanged: [{ type: i0.Output }]
    };

    var ComponentsLibraryModule = /** @class */ (function () {
        function ComponentsLibraryModule() {
        }
        return ComponentsLibraryModule;
    }());
    ComponentsLibraryModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [ComponentsLibraryComponent, ListComponent],
                    imports: [common.CommonModule],
                    exports: [ComponentsLibraryComponent, ListComponent],
                },] }
    ];

    /*
     * Public API Surface of components-library
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ComponentsLibraryComponent = ComponentsLibraryComponent;
    exports.ComponentsLibraryModule = ComponentsLibraryModule;
    exports.ComponentsLibraryService = ComponentsLibraryService;
    exports.ɵa = ListComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-library.umd.js.map
