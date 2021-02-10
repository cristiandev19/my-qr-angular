// Importaciones basicas
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { PrincipalComponent } from './components/principal/principal.component';
import { MaterialModule } from '../material/material.module';
import { AdminComponent } from './admin.component';
import { ProfileComponent } from './components/profile/profile.component';

// Aqui pondremos todos los modulos de material que usaremos
@NgModule({
  declarations: [
    PrincipalComponent,
    AdminComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule
  ],
  exports: [
  ]
})
export class AdminModule { }
