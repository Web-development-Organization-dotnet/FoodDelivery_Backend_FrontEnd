import { supplierInfoModel } from "./supplierInfo";

export class supplierWalletModel {
    supplier_wallet_id: number|null;
    wallet_balance: number|null;
    last_updated: string;
    SI:supplierInfoModel;

    constructor() {
        this.supplier_wallet_id = null;
        this.wallet_balance = null;
        this.last_updated = '';
        this.SI=new supplierInfoModel();

    }
}
