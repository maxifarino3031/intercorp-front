import { Subject } from "rxjs";
import { TypeMenssage } from "../enums/type-message";

export abstract class AbstractSubjectService {
  constructor() {}

  private subject = new Subject<TypeMenssage | null>();

  dispatch = (typeMenssage?: TypeMenssage) => {
    this.subject.next(typeMenssage || null);
  };

  getObservable = () => {
    return this.subject.asObservable();
  };
    
}
