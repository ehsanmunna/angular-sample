import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { interval } from 'rxjs/internal/observable/interval';
import { last, tap } from 'rxjs/operators';
import { UnsubscribeAdapter } from 'src/app/@core/classes/unsubscribe-adapter';
import { IUser } from 'src/app/store/states';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends UnsubscribeAdapter implements OnInit {
  // public observable = interval(1000);
  public users: any;
  constructor(private store: Store<any>) { 
    super();
    this.users = this.store.select(state => {
      return state.user;
    });
  }

  ngOnInit(): void {
    // this.observable
    // .subscribe(e=> {
    //   console.log(e);
    // })
  }

}
