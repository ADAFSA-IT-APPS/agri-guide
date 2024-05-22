import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.page.html',
  styleUrls: ['./login-main.page.scss'],
})
export class LoginMainPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToGuest(_type){
    if(_type == 1){
      this.router.navigate(['/registration']);  
    }else{
      this.router.navigate(['/guest-login'])
    }
  }

  guestVisitor(){
    localStorage.setItem('guest', '1');
    this.router.navigate(['/tabs/home']);
  }
  
}
