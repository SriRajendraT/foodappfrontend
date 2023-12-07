export class ApiResponse {
    Success!:boolean;
    Result!:any;
    Message!:string;
    StatusCode!:number;

    constructor(){
        this.Success=true;
        this.StatusCode=200;
    }
}