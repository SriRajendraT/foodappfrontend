export class ApiResponse<T> {
    Success!:boolean;
    Result!:T;
    Message!:string;
    StatusCode!:number;

    constructor(){
        this.Success=true;
        this.StatusCode=200;
    }
}