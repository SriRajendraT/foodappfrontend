import { Router } from "@angular/router";

export class Shared {
    constructor(private router:Router){}
    onBack(){
        this.router.navigate(['/']);
      }
}