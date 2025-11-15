import { custTypeModel } from "./custType";

export class custInfoModel {
    cust_id: number;
    cust_type_cd: string;
    cust_name: string;
    cust_email: string;
    cust_phno: number;
    cust_pin: number;
    isEdit: boolean;
    custType: custTypeModel;

    constructor() {
        this.cust_id = 0;
        this.cust_type_cd = '';
        this.cust_name = '';
        this.cust_email = '';
        this.cust_phno = 0;
        this.cust_pin = 0;
        this.isEdit=false;
        this.custType=new custTypeModel();
    }

}