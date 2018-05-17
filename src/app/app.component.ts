import { Component } from '@angular/core';
import * as Rx from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {

  }

  ngOnInit() {

    const aboutAnything = 42;

    const myNumber$ = Rx.Observable.from([1, 2, 3, 4, 5])

    // const myData$ = Rx.Observable.fromPromise(fetch('http://example.com/users'))

    const mouseMove$ = Rx.Observable.fromEvent(document.documentElement, 'mouseMove')

    // myNumber$.subscribe(number => console.log(number))

  }

}
