import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsLibraryComponent } from './components-library.component';
import { ListComponent } from './list/list.component';
import { ComponentsLibraryService } from './components-library.service';
export class ComponentsLibraryModule {
}
ComponentsLibraryModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ComponentsLibraryComponent, ListComponent],
                imports: [CommonModule],
                exports: [
                    ComponentsLibraryComponent,
                    ListComponent,
                    ComponentsLibraryService,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy1saWJyYXJ5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJDOi9EZXZlbG9wbWVudC9kYi13b3Jrc3BhY2UvcHJvamVjdHMvY29tcG9uZW50cy1saWJyYXJ5L3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzLWxpYnJhcnkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQVd4RSxNQUFNLE9BQU8sdUJBQXVCOzs7WUFUbkMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLDBCQUEwQixFQUFFLGFBQWEsQ0FBQztnQkFDekQsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixPQUFPLEVBQUU7b0JBQ1AsMEJBQTBCO29CQUMxQixhQUFhO29CQUNiLHdCQUF3QjtpQkFDekI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50c0xpYnJhcnlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMtbGlicmFyeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gJy4vbGlzdC9saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wb25lbnRzTGlicmFyeVNlcnZpY2UgfSBmcm9tICcuL2NvbXBvbmVudHMtbGlicmFyeS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQ29tcG9uZW50c0xpYnJhcnlDb21wb25lbnQsIExpc3RDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW1xuICAgIENvbXBvbmVudHNMaWJyYXJ5Q29tcG9uZW50LFxuICAgIExpc3RDb21wb25lbnQsXG4gICAgQ29tcG9uZW50c0xpYnJhcnlTZXJ2aWNlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRzTGlicmFyeU1vZHVsZSB7fVxuIl19