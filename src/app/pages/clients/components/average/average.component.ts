import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ClientService } from "src/app/common/adapters/client.service";

@Component({
  selector: "average",
  templateUrl: "./average.component.html",
  styleUrls: ["./average.component.scss"],
})
export class AverageComponent implements OnInit {
  modalRef?: BsModalRef;
  average: string = "";

  constructor(private clientService: ClientService,private modalService: BsModalService) {}

  ngOnInit(): void {
    
  }

  openModal(template: TemplateRef<any>) {
    const ngbModalOptions: ModalOptions = {
      backdrop: "static",
      keyboard: false,
    };

    this.clientService.avarage().subscribe((response: any) => {
      this.average=`The average age is ${response.data}`;
      this.modalRef = this.modalService.show(template, ngbModalOptions);
    });
    
  }
}
