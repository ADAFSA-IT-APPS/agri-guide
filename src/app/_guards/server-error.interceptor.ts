import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpRequest, HttpHandler,
    HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map, tap } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { HelperService } from '../_services/helper.service';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {

    constructor(private toastCtrl: ToastController, private helperService: HelperService) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                retry(1),
                tap(evt => {
                }),
                catchError((error: HttpErrorResponse) => {
                    
                    if (error.status === 401) {
                        // refresh token
                        this.presentToast(this.helperService.translate('loginSessionExpired'));
                        localStorage.removeItem('currentUser');
                        location.href = '/adafsa-login';
                        // location.href = '/member-login';
                    } else if (error.status === 404) {
                        console.log('Page not found 404')
                    } else {
                        localStorage.removeItem('token');
                        localStorage.removeItem('currentUser');
                        this.presentToast(this.helperService.translate('somethingWentWrong'));
                        //location.href = '/login-info';
                        return throwError(error);
                    }
                })
            );
    }

    async presentToast(_msg) {
        const toast = await this.toastCtrl.create({
            message: _msg,
            duration: 2000
        });
        toast.present();
    }

}