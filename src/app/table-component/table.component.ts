import { Component } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
})

export class TableComponent {
    title = 'Items';
    total: number;
    items = [
        { name: 'item1', price: 10 },
        { name: 'item2', price: 20 }
    ];

    constructor() {
        this.calculate();
    }
    calculate() {
        this.total = this.items.reduce((sum, item) => sum + item.price, 0);
    }
}
