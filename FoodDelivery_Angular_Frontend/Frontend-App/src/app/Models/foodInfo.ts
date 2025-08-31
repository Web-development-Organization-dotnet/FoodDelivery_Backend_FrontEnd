import { foodTypeModel } from "./foodType";

export class foodInfoModel {
    food_id: number;
    food_name: string;
    food_description: string;
    food_qty: number;
    food_img: string;
    imageCaraousal: any;
    isEdit: boolean;
    foodType: foodTypeModel;


    constructor() {
        this.food_id = 0.0;
        this.food_name = '';
        this.food_description = '';
        this.food_qty = 0.0;
        this.food_img = '';    
        this.imageCaraousal = null;
        this.isEdit=false;
        this.foodType=new foodTypeModel();
    }
}