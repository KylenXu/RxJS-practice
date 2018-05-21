// MODULES
import { NgModule } from '@angular/core'
import { RxjsRoutingModule } from './rxjs-routing.module'

// COMPONENTS
import { RxjsComponent } from './rxjs.component'
import { RxjsStartComponent } from './rxjs-start/rxjs-start.component'
import { RxjsPracticeComponent } from './rxjs-practice/rxjs-practice.component'


const COMPONENTS = [
  RxjsComponent,
  RxjsStartComponent,
  RxjsPracticeComponent
]
@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [RxjsRoutingModule]
})

export class RxjsModule {

}
