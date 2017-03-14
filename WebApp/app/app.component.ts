import { Component } from '@angular/core';
import { LoginService } from './login-service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/Views/main.html'
})
export class AppComponent {
    private hasAccessToSpeti43: boolean;

   
    constructor(private loginService: LoginService) {      
        loginService.hasPrivilege("speti43")
            .subscribe(res => this.hasAccessToSpeti43 = res);
    }

    clickMessage = '';


    onClickMe() {
        this.clickMessage = 'You are my hero!';
    }


}