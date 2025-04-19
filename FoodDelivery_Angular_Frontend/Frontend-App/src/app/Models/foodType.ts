
export class foodTypeModel {
    food_category: string;
    food_type: string;
    food_type_cd: string;
    type_desc: string;
    isEdit: boolean;


    constructor() {
        this.food_category = '';
        this.food_type = '';
        this.food_type_cd = '';
        this.type_desc = '';    
        this.isEdit=false;
    }
}