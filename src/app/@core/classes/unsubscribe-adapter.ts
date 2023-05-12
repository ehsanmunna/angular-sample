import { Injectable, OnDestroy } from "@angular/core";
import { pipe } from "rxjs/internal/util/pipe";
import { takeWhile } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class UnsubscribeAdapter implements OnDestroy{
    public alive: boolean = true;

    takeWhileAlive = () => pipe(takeWhile(() => this.alive))
    
	ngOnDestroy(): void {
		this.alive = false;
	}
}