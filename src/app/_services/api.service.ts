import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { retry, catchError, delay } from 'rxjs/operators';
import { identifierModuleUrl } from '@angular/compiler';

let headers;

export class AuthInfo {
  constructor(public $uid: string) { }
  isLoggedIn() {
    return !!this.$uid;
  }
  // headers = new HttpHeaders({
  //   'fetchAll': 'false'
  // });
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  base_path = environment.api_path;
  static UNKNOWN_USER = new AuthInfo(null);
  public authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(ApiService.UNKNOWN_USER);
  constructor(private http: HttpClient) {

  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  //My Profile
  getProfile() {
    return this.http.get<any>(this.base_path + 'profiles/?ts=' + new Date().valueOf())
      .pipe(
        catchError(this.handleError)
      )
  }

  //Register
  register(_payload) {
    return this.http.post<any>(this.base_path + 'app/register', _payload)
      .pipe(
        catchError(this.handleError)
      )
  }

  //Check Mobile No
  checkMobileNo(_mobile) {
    return this.http.get<any>(this.base_path + 'app/CheckMobileNo/' + _mobile + '?ts=' + new Date().valueOf())
      .pipe(
        catchError(this.handleError)
      )
  }

  //Generate OTP
  generateOTP(_mobile) {
    return this.http.post<any>(this.base_path + 'app/GenerateOTP/' + _mobile, '')
      .pipe(
        catchError(this.handleError)
      )
  }

  //Verify OTP
  verifyOTP(_payload) {
    return this.http.post<any>(this.base_path + 'app/VerifyOTP', _payload)
      .pipe(
        catchError(this.handleError)
      )
  }

  //Change Password
  changePassword(_payload) {
    return this.http.post<any>(this.base_path + 'App/ChangePassword', _payload)
      .pipe(
        catchError(this.handleError)
      )
  }

  //Topics Category
  getTopicsCategory() {
    return this.http.get<any>(this.base_path + 'topictypes?ts=' + new Date().valueOf())
      .pipe(
        catchError(this.handleError)
      )
  }

  //Get Category by ID
  getCategoriesByID(_id) {
    return this.http.get<any>(this.base_path + 'categories/' + _id + '?ts=' + new Date().valueOf())
      .pipe(
        catchError(this.handleError)
      )
  }

  //Topics
  getTopics() {
    return this.http.get<any>(this.base_path + 'topics?ts=' + new Date().valueOf())
      .pipe(
        
        catchError(this.handleError)
      )
  }

  //New Topics By Pagination
  getNewTopics(_payload) {
    return this.http.get<any>(this.base_path + 'app/NewTopics?' + _payload)
      .pipe(
        
        catchError(this.handleError)
      )
  }

  //Top Topics By Pagination
  getTopTopics(_payload) {
    return this.http.get<any>(this.base_path + 'app/TopTopics?' + _payload)
      .pipe(
        
        catchError(this.handleError)
      )
  }

  //All Topics By Pagination
  getAllTopics(_payload) {
    return this.http.get<any>(this.base_path + 'app/AllTopics?' + _payload)
      .pipe(
        
        catchError(this.handleError)
      )
  }

  //Seacrh Topics By Pagination
  searchTopics(_payload) {
    return this.http.get<any>(this.base_path + 'app/SearchTopics?' + _payload)
      .pipe(
        
        catchError(this.handleError)
      )
  }

  //Get Topic By ID
  getTopicById(_id) {
    return this.http.get<any>(this.base_path + 'topics/' + _id + '?ts=' + new Date().valueOf())
      .pipe(
        
        catchError(this.handleError)
      )
  }

  //Get Disease By ID
  getDiseaseById(_id) {
    return this.http.get<any>(this.base_path + 'Diseases/' + _id + '?ts=' + new Date().valueOf())
      .pipe(
        
        catchError(this.handleError)
      )
  }

  //Get Treatment By ID
  getTreatmentById(_id) {
    return this.http.get<any>(this.base_path + 'Treatments/' + _id + '?ts=' + new Date().valueOf())
      .pipe(
        
        catchError(this.handleError)
      )
  }

   //Get Symptoms By ID
   getSymptomById(_id) {
    return this.http.get<any>(this.base_path + 'symptoms/' + _id + '?ts=' + new Date().valueOf())
      .pipe(
        catchError(this.handleError)
      )
  }

  //Get AI Tags
  getAiTags() {
    return this.http.get<any>(this.base_path + 'aitags?ts=' + new Date().valueOf())
      .pipe(
        
        catchError(this.handleError)
      )
  }

  //Visitor Count
  visitorCount(_id) {
    return this.http.post<any>(this.base_path + 'app/HitVisitor/' + _id, '')
      .pipe(
        catchError(this.handleError)
      )
  }

  //Events
  getEvents() {
    return this.http.get<any>(this.base_path + 'app/Top5Events?ts=' + new Date().valueOf())
      .pipe(
        
        catchError(this.handleError)
      )
  }

  //Events
  getEventsByID(_id) {
    return this.http.get<any>(this.base_path + 'events/' + _id + '?ts=' + new Date().valueOf())
      .pipe(
        
        catchError(this.handleError)
      )
  }

  //GetCalendar
  getCalendar() {
    return this.http.get<any>(this.base_path + 'app/GetCalendar?ts=' + new Date().valueOf())
      .pipe(
        
        catchError(this.handleError)
      )
  }

  //Get Event by Date
  getEventsByDate(month, year) {
    return this.http.get<any>(this.base_path + 'app/EventsByMonthYear?monthNo=' + month + '&year=' + year)
      .pipe(
        
        catchError(this.handleError)
      )
  }

  //Select category
  selectCategory(_id) {
    return this.http.post<any>(this.base_path + 'UserAccount/AddCategory', { id: _id })
      .pipe(
        catchError(this.handleError)
      )
  }

  //Delete Selected Category
  deleteSelectedCategory(_id) {
    return this.http.delete<any>(this.base_path + 'UserAccount/RemoveCategory/' + _id)
      .pipe(
        catchError(this.handleError)
      )
  }

  //Add Farm
  addFarm(_payload) {
    return this.http.post<any>(this.base_path + 'farms', _payload)
      .pipe(
        catchError(this.handleError)
      )
  }

  //Farm by ID
  farmById(_id) {
    return this.http.get<any>(this.base_path + 'farms/' + _id + '?ts=' + new Date().valueOf())
      .pipe(
        catchError(this.handleError)
      )
  }

  //Edit Farm
  editFarm(_id, _payload) {
    return this.http.put<any>(this.base_path + 'farms/' + _id, _payload)
      .pipe(
        catchError(this.handleError)
      )
  }

  //Remvove Farm
  removeFarm(_id) {
    return this.http.delete<any>(this.base_path + 'farms/' + _id)
      .pipe(
        catchError(this.handleError)
      )
  }

  //Update Profile
  updateProfile(_id, _payload) {
    return this.http.put<any>(this.base_path + 'profiles/' + _id, _payload)
      .pipe(
        catchError(this.handleError)
      )
  }

  //Add Favorite Topic
  addFavoriteTopic(id) {
    return this.http.post<any>(this.base_path + 'UserAccount/AddFavouriteTopics', { id })
      .pipe(
        catchError(this.handleError)
      )
  }

  //Delete Favorite Topic
  deleteFavoriteTopic(id) {
    return this.http.delete<any>(this.base_path + 'UserAccount/RemoveFavouriteTopics/' + id)
      .pipe(
        catchError(this.handleError)
      )
  }

  //Add Favorite Event
  addfavoriteEvent(id) {
    return this.http.post<any>(this.base_path + 'UserAccount/AddFavouriteEvents', { id })
      .pipe(
        catchError(this.handleError)
      )
  }

  //Delete Favorite Event
  deleteFavoriteEvent(id) {
    return this.http.delete<any>(this.base_path + 'UserAccount/RemoveFavouriteEvents/' + id)
      .pipe(
        catchError(this.handleError)
      )
  }

  //Scan Image
  scanImage(_name) {
    return this.http.get<any>(this.base_path + 'UserAccount/ScanImage?SearchKey=' + _name)
      .pipe(
        catchError(this.handleError)
      )
  }

  //Chat List
  getChatList() {
    return this.http.get<any>(this.base_path + 'conversions/MyChatRecent?ts=' + new Date().valueOf())
      .pipe(
        catchError(this.handleError)
      )
  }

  //upload image
  uploadChatImage(_payload) {
    return this.http.post<any>(this.base_path + 'ScanImageHistories', _payload)
      .pipe(
        catchError(this.handleError)
      )
  }

  //Get Chat History
  getChatHistory(_payload) {
    return this.http.post<any>(this.base_path + 'conversions/GetChatHistory?' + new Date().valueOf(), _payload)
      .pipe(
        catchError(this.handleError)
      )
  }

  //Country List
  getCountries() {
    return this.http.get<any>('./../assets/json/country.json')
      .pipe(
        catchError(this.handleError)
      )
  }
  //Nationality List
  getNationalities() {
    return this.http.get<any>('./../assets/json/nationality.json')
      .pipe(
        catchError(this.handleError)
      )
  }

  //Get Adafsa server time
  getServerTime(_payload) {
    return this.http.post<any>(this.base_path + 'ADAFSA/ServerDateTime', _payload)
      .pipe(
        catchError(this.handleError)
      )
  }

  //Adafsa Register
  adafsaRegister(_payload) {
    return this.http.post<any>(this.base_path + 'ADAFSA/FarmerRegister', _payload)
      .pipe(
        catchError(this.handleError)
      )
  }

  //Adafsa Farmer info
  getFarmerInfo(_payload) {
    return this.http.post<any>(this.base_path + 'ADAFSA/FarmerInfo', _payload)
      .pipe(
        catchError(this.handleError)
      )
  }

  //Adafsa Farmer info
  adafsaForgotPassword(_payload) {
    return this.http.post<any>(this.base_path + 'ADAFSA/ReSendInfo', _payload)
      .pipe( 
        catchError(this.handleError) 
      )
  }

    //Animal Symptoms
    getAnimalSymptoms() {
      return this.http.get<any>(this.base_path + 'app/AnimalSymptoms?ts=' + new Date().valueOf())
      .pipe(
        catchError(this.handleError)
      )
    }

    //Show Advisors
    getAdvisors(){
      return this.http.get<any>(this.base_path + 'app/ShowAdvisors?ts=' + new Date().valueOf())
      .pipe(
        catchError(this.handleError)
      )
    }

    //Get Advisors by ID
    advisorById(_id){
      return this.http.get<any>(this.base_path + 'app/GetAdvisor/' + _id + '?ts=' + new Date().valueOf())
      .pipe(
        catchError(this.handleError)
      )
    }
}