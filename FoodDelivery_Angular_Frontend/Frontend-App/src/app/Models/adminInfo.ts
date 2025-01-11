export class AdminInfoModel {
  name: string;
  email: string;
  status: string;
  reg_date: string;
  phone: string;
  photo_id_no: string;
  emp_id: number;

  constructor() {
    this.name = '';
    this.email = '';
    this.status = '';
    this.reg_date = '';
    this.phone = '';
    this.photo_id_no = '';
    this.emp_id = 0;
  }
}
