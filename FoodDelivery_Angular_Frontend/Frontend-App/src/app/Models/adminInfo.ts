export class AdminInfoModel {
  fullname: string;
  email: string;
  status: string;
  reg_date: string;
  phone: string;
  photo_id_no: string;

  constructor() {
    this.fullname = '';
    this.email = '';
    this.status = '';
    this.reg_date = '';
    this.phone = '';
    this.photo_id_no = '';
  }
}
