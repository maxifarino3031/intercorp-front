import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { ListClientsComponent } from './components/list-clients/list-clients.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { GridMenuComponent } from './components/grid-menu/grid-menu.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AverageComponent } from './components/average/average.component';
import { DeviationsComponent } from './components/deviations/deviations.component';

@NgModule({
  declarations: [
    ClientsComponent,
    ListClientsComponent,
    AddClientComponent,
    GridMenuComponent,
    AverageComponent,
    DeviationsComponent    
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    NgxSpinnerModule
  ]
})
export class ClientsModule { }
