import { custTypeModel } from "./custType";

export class custRegisterModel {
  cust_name: string;
  cust_email: string;
  status: string;
  //reg_date: string;
  cust_phno: string;
  //photo_id_no: string;
  cust_pin: string;
  cust_passwd: string;
  cust_type_cd: string;
  //agent_img: string;
  custType: custTypeModel;

  constructor() {
    this.cust_name = '';
    this.cust_email = '';
    this.status = '';
    //this.reg_date = '';
    this.cust_phno = '';
    //this.photo_id_no = '';
    this.cust_pin = '';
    this.cust_passwd = '';
    this.cust_type_cd = '';
    //this.agent_img = '';  
    this.custType=new custTypeModel();
    }
}
