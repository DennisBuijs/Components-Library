import { Component, EventEmitter, Output } from '@angular/core';
export class ListComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiQzovRGV2ZWxvcG1lbnQvZGItd29ya3NwYWNlL3Byb2plY3RzL2NvbXBvbmVudHMtbGlicmFyeS9zcmMvIiwic291cmNlcyI6WyJsaWIvbGlzdC9saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBaUIsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTy9FLE1BQU0sT0FBTyxhQUFhO0lBS3hCO1FBSkEsY0FBUyxHQUFVLEVBQUUsQ0FBQztRQUVaLGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFFcEQsQ0FBQztJQUVoQixRQUFRLEtBQVUsQ0FBQztJQUVuQixXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDbEIsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDL0IsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsWUFBWSxFQUFFO1NBQ2hDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7WUFyQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixnakRBQW9DOzthQUVyQzs7OzswQkFJRSxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1aS1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saXN0LmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGxpc3RJdGVtczogYW55W10gPSBbXTtcblxuICBAT3V0cHV0KCkgbGlzdENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICBhZGRMaXN0SXRlbSgpIHtcbiAgICB0aGlzLmxpc3RJdGVtcy5wdXNoKHtcbiAgICAgIG5hbWU6IHRoaXMubGlzdEl0ZW1zLmxlbmd0aCArIDEsXG4gICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvRGF0ZVN0cmluZygpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5saXN0Q2hhbmdlZC5lbWl0KHRoaXMubGlzdEl0ZW1zKTtcbiAgfVxufVxuIl19