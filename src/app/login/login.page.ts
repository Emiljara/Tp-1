import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup; // Ya no hay necesidad del operador "!" al inicializar en el constructor

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({ // Inicializa loginForm directamente en el constructor
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {}

  login() {
    const { email, password } = this.loginForm.value;
    if (this.authService.login(email, password)) {
      this.router.navigate(['/home']);
    } else {
      alert('Usuario o contraseña incorrecta');
    }
  }
}






// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from '../core/services/auth.service';


// @Component({
//   selector: 'app-login',
//   templateUrl: './login.page.html',
//   styleUrls: ['./login.page.scss'],
// })
// export class LoginPage {

//   loginForm = {
//     email: '',
//     password: ''
//   };

//   constructor(private authService: AuthService, private router: Router) {}

//   login() {
//     const { email, password } = this.loginForm;
//     if (this.authService.login(email, password)) {
//       this.router.navigate(['/home']); 
//     } else {
//       alert('Usuario o contraseña incorrecta');
//     }
//   }
// }



// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.page.html',
//   styleUrls: ['./login.page.scss'],
// })
// export class LoginPage {
//   loginForm: FormGroup;
//   validUser = {
//     email: '',
//     password: '',
//   };

//   constructor(private fb: FormBuilder, private router: Router) {
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//     });
//   }

//   login() {
//     const { email, password } = this.loginForm.value;
//     if (email === this.validUser.email && password === this.validUser.password) {
//       // Navegar a la pantalla de Home
//       this.router.navigate(['/home'], { replaceUrl: true });
//     } else {
//       alert('Usuario o contraseña incorrecta');
//     }
//   }
// }
