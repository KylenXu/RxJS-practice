import { Component, OnInit } from '@angular/core'
import * as Rx from 'rxjs/Rx'

@Component({
  selector: 'rxjs-start',
  styleUrls: ['./rxjs-start.component.scss'],
  template: `
  <div>RxJS-start</div>
  <div id="card">
      <div id="title"></div>
  </div>
  `
})

export class RxjsStartComponent {
  constructor() { }

  ngOnInit() {

    const docElm: any = document.documentElement
    const cardElm: any = document.querySelector('#card')
    const titleElm: any = document.querySelector('#title')

    const { clientWidth, clientHeight } = docElm

    // Stream of all mousemove events
    // const mouseMove$ = Rx.Observable
    //   .fromEvent(docElm, 'mousemove')

    const mouseMove$ = Rx.Observable
      .fromEvent(docElm, 'mousemove')
      .map((event: any) => ({
        x: event.clientX,
        y: event.clientY
      }))

    // Apply values to element
    // mouseMove$.subscribe((event: any) => {
    //   titleElm.innerHTML =
    //     `${event.clientX}, ${event.clientY}`
    // })

    mouseMove$.subscribe((pos: any) => {
      const rotX = (pos.y / clientHeight * -50) - 25
      const rotY = (pos.x / clientWidth * 50) - 25

      cardElm.style = `transform: rotateX(${rotX}deg) rotateY(${rotY}deg);`
    })



  }

}
