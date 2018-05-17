import { ExtraOptions, RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'

const routes: Routes = [{
  path: '',
  redirectTo: 'rxjs',
  pathMatch: 'full'
}, {
  path: 'rxjs',
  loadChildren: './rxjs/rxjs.module#RxjsModule'
}]

const config: ExtraOptions = {
  useHash: true,
}

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
