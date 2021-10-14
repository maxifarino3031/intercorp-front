import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Client } from "../models/client";

@Injectable({
  providedIn: "root",
})
export class ClientService {
  constructor(private httpClient: HttpClient) {}

  save = (client: Client) => {
    return this.httpClient.post("http://localhost:3000/api/v1/clients", client);
  };

  getAll = () => {
    return this.httpClient.get("http://localhost:3000/api/v1/clients/all");
  };

  avarage = () => {
    return this.httpClient.get("http://localhost:3000/api/v1/clients/average");
  };

  desviation= () => {
    return this.httpClient.get("http://localhost:3000/api/v1/clients/deviation");
  };
}
