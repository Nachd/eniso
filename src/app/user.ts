export class User {
    email : string;
    password : string;
    firstname : string;
    lastname : string;
    birthdate : Date;
    isVerified : boolean;

    constructor(){
       
        this.isVerified = false;
    }
}
