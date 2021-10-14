import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Client } from "../models/client";

@Injectable({
  providedIn: "root",
})
export class ClientService {
  constructor(private httpClient: HttpClient) {}

  save = (client: Client) => {
    return this.httpClient.post(`${environment.baseUrlApi}/clients`, client);
  };

  getAll = () => {
    return this.httpClient.get(`${environment.baseUrlApi}/clients/all`);
  };

  avarage = () => {
    return this.httpClient.get(`${environment.baseUrlApi}/clients/average`);
  };

  desviation = () => {
    return this.httpClient.get(`${environment.baseUrlApi}/clients/deviation`);
  };
  
}
