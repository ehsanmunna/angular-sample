import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ADD_USER } from 'src/app/store/reducers/user.reducer';
import { AppState, IUser } from 'src/app/store/states';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public formGroup: any;
  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
    ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      userName: []
    })
  }

  addUser() {
    const { userName } = this.formGroup.value; 
    this.store.dispatch({
      type: ADD_USER,
      payload: <IUser> userName
    });
  }

}
