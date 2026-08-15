import { supplierInfoModel } from "./supplierInfo";

export class supplierWalletModel {
    supplier_wallet_id: number;
    supplier_id: number;
    wallet_balance: number;
    supplier_name: string;
    SI:supplierInfoModel;
    last_update_date: string;
    
    constructor() {
        this.supplier_wallet_id = 0;
        this.supplier_id = 0;
        this.wallet_balance=0;
        this.supplier_name = '';
        this.SI=new supplierInfoModel();
        this.last_update_date = '';
    }
}
