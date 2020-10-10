import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsLibraryComponent } from './components-library.component';
import { ListComponent } from './list/list.component';
export class ComponentsLibraryModule {
}
ComponentsLibraryModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ComponentsLibraryComponent, ListComponent],
                imports: [CommonModule],
                exports: [ComponentsLibraryComponent, ListComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy1saWJyYXJ5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJDOi9EZXZlbG9wbWVudC9kYi13b3Jrc3BhY2UvcHJvamVjdHMvY29tcG9uZW50cy1saWJyYXJ5L3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzLWxpYnJhcnkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQU90RCxNQUFNLE9BQU8sdUJBQXVCOzs7WUFMbkMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLDBCQUEwQixFQUFFLGFBQWEsQ0FBQztnQkFDekQsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixPQUFPLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxhQUFhLENBQUM7YUFDckQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudHNMaWJyYXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzLWxpYnJhcnkuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tICcuL2xpc3QvbGlzdC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtDb21wb25lbnRzTGlicmFyeUNvbXBvbmVudCwgTGlzdENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbQ29tcG9uZW50c0xpYnJhcnlDb21wb25lbnQsIExpc3RDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRzTGlicmFyeU1vZHVsZSB7fVxuIl19