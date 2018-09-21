import { TableComponent } from './table.component';


describe('Table Component', () => {
    it('Should be truthy', () => {
        const table = new TableComponent();
        expect(table).toBeTruthy();
    });

    it('Should calculate the sum', () => {
        const table = new TableComponent();
        expect(table.total).toBe(30);
    });

});
