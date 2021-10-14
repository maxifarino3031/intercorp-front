import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { Subscription } from "rxjs";
import { ClientService } from "src/app/common/adapters/client.service";
import { Client } from "src/app/common/models/client";
import { ListClientsSubjectsService } from "src/app/common/subjects/list-client-subject.service";

@Component({
  selector: "list-clients",
  templateUrl: "./list-clients.component.html",
  styleUrls: ["./list-clients.component.scss"],
})
export class ListClientsComponent implements OnInit,OnDestroy {
  listClients: Client[] = [];  
  subscription!:Subscription;

  constructor(
    private readonly clientService: ClientService,
    private spinner: NgxSpinnerService,
    private listClientsSubjectsService: ListClientsSubjectsService
  ) {}
  
  ngOnInit(): void {
    this.subscription=this.listClientsSubjectsService
      .getObservable()
      .subscribe(() => {
        this.onLoadData();    
      });

    this.onLoadData();
  }

  onSuccess = (response: any) => {
    this.listClients = response.data;
  };

  onError = (error: any) => {
    //la idea es poner un componente que muestre los mensajes de error    
    this.spinner.hide();
  };

  onFinally = () => {    
    this.spinner.hide();
  };

  onLoadData = (): void => {
    this.spinner.show();
    this.clientService
      .getAll()
      .subscribe(this.onSuccess, this.onError, this.onFinally);
  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
}
