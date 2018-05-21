import { Component, OnInit } from '@angular/core'
import * as Rx from 'rxjs/Rx'

@Component({
  selector: 'rxjs-start',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})

export class RxjsComponent {
  constructor() { }

  ngOnInit() {
    console.log(Rx)
  }

  routeInfo: any = [{  /** 跳转信息 */
    url: 'rxjsstart',
    label: '通过动画'
  }, {
    url: 'rxjspractice',
    label: '简单练习'
  }]

}
