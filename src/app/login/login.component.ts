import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';
// import { log } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  constructor(private fb:FormBuilder,private router:Router,private authServiice:AuthService) { 
    this.form=this.fb.group({
      userName : ['',Validators.required],
      password :['',Validators.required]

    })
  }
submit() {
  sessionStorage.setItem('username',this.form.value);
  this.router.navigateByUrl('/dashboard')
  console.log(this.form.value);
}
  ngOnInit(): void {
 
  this.authServiice.isLoggedIn() ?  this.router.navigateByUrl('/dashboard') : this.router.navigateByUrl('/login')
  }

}
