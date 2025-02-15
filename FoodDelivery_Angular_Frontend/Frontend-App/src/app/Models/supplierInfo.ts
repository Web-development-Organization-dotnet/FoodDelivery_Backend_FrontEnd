
export class supplierInfoModel {
    supplier_name: string;
    supplier_status: string;
    supplier_status_options: string[];
    latitude: string;
    longtitude: string;
    pincode: number;
    reg_date: string;
    serv_pin_list: string;
    supplier_address: string;
    supplier_gst_num: number;
    supplier_type: string;
    supplier_id: number;
    isEdit: boolean;



    constructor() {
        this.supplier_name = '';
        this.supplier_status = '';
        this.supplier_status_options = [];
        this.latitude = '';
        this.longtitude='';
        this.pincode = 0;
        this.reg_date = '';
        this.serv_pin_list = '';
        this.supplier_address = '';
        this.supplier_status = '';
        this.supplier_gst_num = 0;
        this.supplier_type = '';
        this.supplier_id = 0;
        this.isEdit=false;


    }
}
