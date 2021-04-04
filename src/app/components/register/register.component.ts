import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 *
 * @param form
 */
function passwordMatchValidator(form){
  const password = form.get('password');
  const confirmPassword = form.get('confirmPassword');

  if (password.value !== confirmPassword.value){
    confirmPassword.setErrors({passwordsMatch: true})
  }else{
    confirmPassword.setErrors(null);
  }
}
function symbolValidator(control){
  if (control.hasError('required')) return null;
  if (control.hasError('minlength')) return null;

  if(control.value.indexOf('@') > -1){
    return null;
  }else {
    return { symbol: true}
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
    // this.registerForm = new FormGroup({
    //   name: new FormControl('John Due'),
    //   email: new FormControl('dasd@sada.com'),
    //   username: new FormControl('john.d'),
    //   password: new FormControl('dssss'),
    //   confirmPassword: new FormControl('dssss'),
    // });
  }
  buildForm(){
    this.registerForm = this.builder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required ,Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, symbolValidator, Validators.minLength(4)]],
      confirmPassword: ''
    }, {
      validators: passwordMatchValidator
    })
  }

  register() {
    console.log(this.registerForm.value)
  }
}
