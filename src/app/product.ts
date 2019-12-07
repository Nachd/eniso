import { Category } from './category';

export class Product {
    _id : string;
    ref : string;
    title : string;
    category_id : Category;
    price : number;
    description : string;
    picture : string;
    isInStock : boolean;
}
