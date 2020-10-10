import { Component, Input } from '@angular/core';
export class ComponentsLibraryComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy1saWJyYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJDOi9EZXZlbG9wbWVudC9kYi13b3Jrc3BhY2UvcHJvamVjdHMvY29tcG9uZW50cy1saWJyYXJ5L3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzLWxpYnJhcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBOEN6RCxNQUFNLE9BQU8sMEJBQTBCO0lBR3JDLGdCQUFlLENBQUM7SUFFaEIsUUFBUSxLQUFVLENBQUM7OztZQWpEcEIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUNUO2FBRUY7Ozs7bUJBRUUsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1aS1jb21wb25lbnRzLWxpYnJhcnknLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJsaXN0LWdyb3VwIG0tdC0yNCByb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgbGlzdC1ncm91cC1oZWFkZXIgcm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMiBjb2wtbWQtMSB0YWJsZS1oZWFkZXJcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMCBjb2wtc20tOCBjb2wtbWQtNiB0YWJsZS1oZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3ViaGVhZGluZy0wMVwiPk5hbWU8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNCBkLW1kLWJsb2NrIGQtbm9uZSB0YWJsZS1oZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3ViaGVhZGluZy0wMVwiPkRhdGU8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMiBjb2wtbWQtMSBkLXNtLWJsb2NrIGQtbm9uZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibGlzdC1ncm91cC1jb250ZW50IHJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtY29sdW1uIGljb24gY29sLTIgY29sLW1kLTFcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVjayB2LWNlbnRlclwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibS0wXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIm9wdGlvbjFcIiAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsIHAtMFwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJ0YWJsZS1jb2x1bW4gdGV4dC1ub3dyYXAgdGV4dC10cnVuY2F0ZSBjb2wtMTAgY29sLXNtLTggY29sLW1kLTZcIlxuICAgICAgICA+XG4gICAgICAgICAgPHN0cm9uZz5yeWFuLmJyaWxAY210ZWxlY29tLmNvbTwvc3Ryb25nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwidGFibGUtY29sdW1uIHRleHQtbm93cmFwIHRleHQtdHJ1bmNhdGUgY29sLTQgZC1tZC1ibG9jayBkLW5vbmVcIlxuICAgICAgICA+XG4gICAgICAgICAgTWF5IDI1LCAyMDE4IDE1OjIzXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtY29sdW1uIGljb24gY29sLTIgY29sLW1kLTEgZC1zbS1ibG9jayBkLW5vbmVcIj5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3M9XCJmcy1oMiBjbS1pY29uIGNtLWljb24tbG9jay1sb2NrZWRcIlxuICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRzTGlicmFyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRleHQ7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cbn1cbiJdfQ==