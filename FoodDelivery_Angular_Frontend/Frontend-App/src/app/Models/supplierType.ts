
export class supplierTypeModel {
    supplier_type: string;
    description: string;
    yearly_turnover: number;
    isEdit: boolean;


    constructor() {
        this.supplier_type = '';
        this.description = '';
        this.yearly_turnover = 0;
        this.isEdit=false;
    }
}
