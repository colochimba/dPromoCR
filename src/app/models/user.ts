export class User {
    email: string = "";
    name: string = "Usuario";
    lastname: string = "Nuevo";
    gender: string = "";
    birthdate: string = "";
    idnumber: string = "";
    idtype: string = "";
    paypalid: string = "";
    active: boolean = false;
    mispromos = [];
    constructor(){
        this.mispromos = new Array();
    }
}