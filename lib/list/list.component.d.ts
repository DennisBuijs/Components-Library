import { EventEmitter, OnInit } from '@angular/core';
export declare class ListComponent implements OnInit {
    listItems: any[];
    listChanged: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    addListItem(): void;
}
