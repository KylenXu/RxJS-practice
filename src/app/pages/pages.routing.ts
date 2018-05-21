// MODULES
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
// COMPONENTS
import { PagesComponent } from './pages.component'

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [{
      path: '',
      redirectTo: 'rxjs',
      pathMatch: 'full'
    }, {
      path: 'rxjs',
      loadChildren: './rxjs/rxjs.module#RxjsModule'
    }]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule {

}
