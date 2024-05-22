import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OtpComponent } from '../common-component/otp/otp.component';
import { ApiService } from '../_services/api.service';
import { AuthenticationService } from '../_services/authentication.service';
import { HelperService } from '../_services/helper.service';
import { TranslateService } from '@ngx-translate/core';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { environment } from 'src/environments/environment';
import { UtilService } from '../_services/util.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  editForm: FormGroup;
  submitted: boolean = false;
  profileData: any;
  image: any;
  path = environment.domain;

  constructor(private camera: Camera,
    private formBuilder: FormBuilder,
    private service: ApiService,
    private webView: WebView,
    private helperService: HelperService,
    private router: Router,
    private translate: TranslateService,
    private file: File,
    private androidPermissions: AndroidPermissions,
    private sanitizer: DomSanitizer,
    private actionSheetController: ActionSheetController,
    private util: UtilService) {
    this.editForm = formBuilder.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      Mobile: ['', [Validators.required,
      Validators.pattern(/^(?:\+971|00971|0)?(?:50|51|52|55|56|2|3|4|6|7|9)\d{7}$/)],
        this.helperService.existingMobileValidator()]
    })
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
      result => console.log('Has permission?', result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
    );
    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS,
    this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE]);
  }

  ngOnInit() {
    if (!localStorage.getItem('currentUser')) {
      this.getProfile();
    } else {
      this.profileData = JSON.parse(localStorage.getItem('currentUser'));
      this.setDetails();
    }
  }

  getProfile() {
    this.service.getProfile().subscribe(_res => {
      localStorage.removeItem('currentUser');
      this.profileData = _res;
      this.setDetails();
      localStorage.setItem('currentUser', JSON.stringify(_res));
    }, error => {

    })
  }

  setDetails() {
    this.editForm.controls['Name'].setValue(this.profileData.users.name);
    this.editForm.controls['Email'].setValue(this.profileData.users.email);
    this.editForm.controls['Mobile'].setValue(this.profileData.users.mobile);
    
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

  async pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 50,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: false
      // targetWidth: 100,
      // targetHeight: 100,
      // saveToPhotoAlbum: false
    }

    // const tempImage = await this.camera.getPicture(options)
    // const tempFilename = tempImage.substr(tempImage.lastIndexOf('/') + 1);
    // const tempBaseFilesystemPath = tempImage.substr(0, tempImage.lastIndexOf('/') + 1);

    // const newBaseFilesystemPath = this.file.dataDirectory;

    // await this.file.copyFile(tempBaseFilesystemPath, tempFilename,
    //   newBaseFilesystemPath, tempFilename);

    // const storedPhoto = newBaseFilesystemPath + tempFilename;
    // const displayImage = this.webView.convertFileSrc(storedPhoto);
    // const resolvedImg = this.webView.convertFileSrc(storedPhoto);
    // this.image = this.sanitizer.bypassSecurityTrustUrl(resolvedImg);
    await this.camera.getPicture(options).then((imageData) => {
      console.log('imageData', imageData);
      
      this.image = 'data:image/jpeg;base64,' + imageData;
      //this.image= this.webView.convertFileSrc(imageData);
      console.log('image', this.image);
    }, (err) => {
      // Handle error
    });
  }

  get f() { return this.editForm.controls; }

  submit() {
    this.submitted = true;
    if (this.editForm.invalid) {
      return;
    }

    var payload = {
      "Name": this.editForm.value.Name,
      "profile": {
        "id": this.profileData.id,
        "preferredLang": this.translate.currentLang,
        "fileContent": this.image ? {
          "base64": this.image ? this.image : "",
          "filename": "profile.jpg"
        } : null,
      }
    }
    this.service.updateProfile(this.profileData.id, payload).subscribe(_res => {
      this.helperService.showToast(this.helperService.translate('successfullyUpdated'), 'success', 'bottom');
      this.getProfile();
      this.util.publishProfile('updated');
      this.helperService.hide();
    })
  }
}