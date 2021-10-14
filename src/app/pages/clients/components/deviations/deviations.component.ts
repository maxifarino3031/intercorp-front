import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ClientService } from 'src/app/common/adapters/client.service';

@Component({
  selector: 'deviations',
  templateUrl: './deviations.component.html',
  styleUrls: ['./deviations.component.scss']
})
export class DeviationsComponent implements OnInit {
  modalRef?: BsModalRef;
  deviation: string = "";

  constructor(private clientService: ClientService,private modalService: BsModalService) {}

  ngOnInit(): void {
    
  }

  openModal(template: TemplateRef<any>) {
    const ngbModalOptions: ModalOptions = {
      backdrop: "static",
      keyboard: false,
    };

    this.clientService.desviation().subscribe((response: any) => {
      this.deviation=`The standar deviations is ${response.data}`;
      this.modalRef = this.modalService.show(template, ngbModalOptions);
    });
    
  }

}
