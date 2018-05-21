import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

// COMPONENTS
import { RxjsComponent } from './rxjs.component'
import { RxjsStartComponent } from './rxjs-start/rxjs-start.component'
import { RxjsPracticeComponent } from './rxjs-practice/rxjs-practice.component'

const routes: Routes = [{
  path: '',
  component: RxjsComponent,
  children: [{
    path: '',
    component: RxjsStartComponent
  }, {
    path: 'rxjsstart',
    component: RxjsStartComponent
  }, {
    path: 'rxjspractice',
    component: RxjsPracticeComponent
  }]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RxjsRoutingModule {

}
