import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { Subscription } from "rxjs";
import { ClientService } from "src/app/common/adapters/client.service";
import { TypeMenssage } from "src/app/common/enums/type-message";
import { Client } from "src/app/common/models/client";
import { ListClientsSubjectsService } from "src/app/common/subjects/list-client-subject.service";

@Component({
  selector: "list-clients",
  templateUrl: "./list-clients.component.html",
  styleUrls: ["./list-clients.component.scss"],
})
export class ListClientsComponent implements OnInit, OnDestroy {
  listClients: Client[] = [];  

  constructor(
    private readonly clientService: ClientService,
    private spinner: NgxSpinnerService,
    private listClientsSubjectsService: ListClientsSubjectsService
  ) {}

  ngOnInit(): void {
    this.listClientsSubjectsService
      .getObservable()
      .subscribe(() => {
        this.onLoadData();    
      });

    this.onLoadData();
  }

  onSuccess = (response: any) => {
    this.listClients = response.data;
  };

  onError = (error: any) => {};

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
    this.listClientsSubjectsService.unSubscribe();
  }
}
