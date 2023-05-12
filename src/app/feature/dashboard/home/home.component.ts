import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { interval } from 'rxjs/internal/observable/interval';
import { timeInterval } from 'rxjs/operators';
import { UnsubscribeAdapter } from 'src/app/@core/classes/unsubscribe-adapter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends UnsubscribeAdapter implements OnInit {
  public observable = interval(1000);
  constructor() { super(); }

  ngOnInit(): void {
    
    this.observable
    .subscribe(e=> {
      console.log(e);
    })
  }

}
