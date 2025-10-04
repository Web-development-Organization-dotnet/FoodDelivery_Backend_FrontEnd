
export class custTypeModel {
    type_desc: string;
    order_limit: number|null;
    total_turnover: number|null;
    cust_type_cd: string;
    isEdit: boolean;


    constructor() {
        this.type_desc = '';
        this.order_limit = null;
        this.total_turnover = null;
        this.cust_type_cd = '';    
        this.isEdit=false;
    }
}