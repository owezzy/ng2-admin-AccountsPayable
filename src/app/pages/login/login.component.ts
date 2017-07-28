import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { BaImageLoaderService, BaThemePreloader, BaThemeSpinner } from '../../theme/services';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;
  public error:boolean = false;
  public errorMessage: string = '';


  constructor(fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values: any): void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      //console.log(values);
      this.auth.login({ email: values.email, password: values.password })
        .subscribe(res => {
          //console.log(res);
          if (res.status === 200){
            this.router.navigate(['pages']);
          }
        }, err => {
          this.error = true;
          this.errorMessage = err.json().message;
          },
        );

    }


  }

  /**public ngAfterViewInit(): void {
    // hide spinner once all loaders are completed
    BaThemePreloader.load().then((values) => {
      this._spinner.hide();
    });
  }

  private _loadImages(): void {
    // register some loaders
    BaThemePreloader.registerLoader(this._imageLoader.load('/assets/img/sky-bg.jpg'));
  }*/
}

