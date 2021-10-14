import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalRef, BsModalService, ModalOptions } from "ngx-bootstrap/modal";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Client } from "src/app/common/models/client";
import { ClientService } from "src/app/common/adapters/client.service";
import { ListClientsSubjectsService } from "src/app/common/subjects/list-client-subject.service";
import { TypeMenssage } from "src/app/common/enums/type-message";

@Component({
  selector: "add-client",
  templateUrl: "./add-client.component.html",
  styleUrls: ["./add-client.component.scss"],
})
export class AddClientComponent implements OnInit {
  modalRef?: BsModalRef;
  form: any = {};
  submitted = false;

  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private listClientsSubjectsService: ListClientsSubjectsService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      age: ["", Validators.required],
      dateOfBirth: ["", Validators.required],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  openModal(template: TemplateRef<any>) {
    const ngbModalOptions: ModalOptions = {
      backdrop: "static",
      keyboard: false,
    };

    this.modalRef = this.modalService.show(template, ngbModalOptions);
  }

  onSuccess = (response: any) => {
    this.onHandleCancel();
    this.listClientsSubjectsService.dispatch(TypeMenssage.reload);
  };

  onError = () => {};

  handleOnSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    const client: Client = this.form.value;
    this.clientService.save(client).subscribe(
      this.onSuccess,
      this.onError
    );
  }

  onHandleCancel(): void {
    this.modalRef?.hide();
    this.submitted = false;
    this.form.reset();
  }
}
