// MODULES
import { CommonModule } from '@angular/common'
import { NgModule, ModuleWithProviders } from '@angular/core'

const MODULES = [
  CommonModule
]

const SERVICE = []

@NgModule({
  imports: [...MODULES],
  exports: [CommonModule]
})

export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [...SERVICE]
    }
  }
}
