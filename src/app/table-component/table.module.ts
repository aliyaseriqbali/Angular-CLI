import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TableComponent } from './table.component';

@NgModule({
    declarations: [
        TableComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [TableComponent]
})
export class TableModule { }
