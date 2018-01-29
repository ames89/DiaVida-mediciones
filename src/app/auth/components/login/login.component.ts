import { Component } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
  animateChild,
  keyframes,
  state
} from '@angular/animations';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('grow', [
      state('small', style('*')),
      state('large', style({ height: '312px', top: '80px' })),
      transition('small => large', [
        animate(
          '.3s cubic-bezier(.42,0,.58,1)',
          style({ height: '312px', top: '80px' })
        )
      ]),
      transition('large => small', [
        animate('.3s cubic-bezier(.42,0,.58,1)', style({ height: '*', top: 0 }))
      ])
    ])
  ]
})
export class LoginComponent {
  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public fbAuth: AngularFireAuth
  ) {
    this.createForm();
  }

  state = 'small';

  animateMe() {
    this.state = this.state === 'small' ? 'large' : 'small';
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.fbAuth.auth.signInWithEmailAndPassword(
      this.loginForm.value.email,
      this.loginForm.value.password
    )
    .then(console.log)
    .catch(console.error);
  }
}
