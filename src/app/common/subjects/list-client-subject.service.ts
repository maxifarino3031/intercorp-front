import { Injectable } from '@angular/core';
import { AbstractSubjectService } from "./abstract-subject.service";

@Injectable({
    providedIn: "root",
  })
export class ListClientsSubjectsService extends AbstractSubjectService {}
