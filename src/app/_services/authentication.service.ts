import { UtilService } from './util.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { RequestCache } from '../_guards/request-cache';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    API_URL: any = environment.api_path;
    constructor(private router: Router, private httpClient: HttpClient, private requestCache: RequestCache, private utilService: UtilService) {

    }
    login(_userData) {
        return this.httpClient.post<any>(this.API_URL + 'app/login', _userData)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                    if (user) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        
                        //localStorage.removeItem('currentUser');
                        if(user.code != "FAMSG400"){
                            if(user['token']){
                                localStorage.setItem('token', user['token']);
                            }
                        }                        
                        localStorage.setItem('guest', '0');
                        this.utilService.chatService();
                        //var userDetails = {userId: user["data"].userId, userName: user["data"].userName, token: user["data"].token }
                        //localStorage.setItem('currentUser', JSON.stringify(userDetails));
                    }
                
                return user;
            }));
    }

    adafsalogin(_userData) {
        return this.httpClient.post<any>(this.API_URL + 'ADAFSA/DoLogin', _userData)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                    if (user) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        
                        //localStorage.removeItem('currentUser');
                        if(user.code != "FAMSG400" && user['token'] != undefined){
                            localStorage.setItem('token', user['token']);
                        }                        
                        localStorage.setItem('guest', '0');
                        this.utilService.chatService();
                        //var userDetails = {userId: user["data"].userId, userName: user["data"].userName, token: user["data"].token }
                        //localStorage.setItem('currentUser', JSON.stringify(userDetails));
                    }
                
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
        this.router.navigateByUrl("/adafsa-login");
        // this.router.navigateByUrl("/member-login");
        this.requestCache.cache.clear();
    }
}
