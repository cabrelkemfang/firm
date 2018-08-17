/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '../http/http.service';
import { FetchRequest } from '../domain/paging/fetch-request.model';
import { RequestOptionsArgs, URLSearchParams, ResponseContentType, RequestOptions } from '@angular/http';
import { Response, Headers, Http } from '@angular/http';
import { requestOptionsProvider } from '../http/default-request-options.service';
import 'rxjs/Rx';

@Injectable()
export class DatamigrationService {

  constructor(@Inject('datamigrationBaseUrl')
  private baseUrl: string, private http: HttpClient) { }

  //Office services
  //office Migration
  getOfficeTemplate(): Observable<Blob> {
    let headers = new Headers({
      'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
    let options = new RequestOptions({
      responseType: ResponseContentType.Blob
    });
    return this.http.get(`${this.baseUrl}/offices/download`, options)
      .map((response: Response) => new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
      );
  }

  uploadOffice(file: File): Observable<void> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(`${this.baseUrl}/offices`, formData);
  }

  //BranchOffice Migration
  getBranchOfficeTemplate(): Observable<Blob> {
    let headers = new Headers({
      'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
    let options = new RequestOptions({
      responseType: ResponseContentType.Blob
    });
    return this.http.get(`${this.baseUrl}/offices/branch/download`, options)
      .map((response: Response) => new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })

      );
  }

  uploadBranchOffice(file: File): Observable<void> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(`${this.baseUrl}/offices/branch`, formData);
  }

  //employee Migration
  getEmployeeTemplate(): Observable<Blob> {
    let headers = new Headers({
      'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
    let options = new RequestOptions({
      responseType: ResponseContentType.Blob
    });
    return this.http.get(`${this.baseUrl}/employees/download`, options)
      .map((response: Response) => new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
      );
  }

  uploademployee(file: File): Observable<void> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(`${this.baseUrl}/employees`, formData);
  }

  //Customers services
  //customers Migration
  getCustomersTemplate(): Observable<Blob> {
    let headers = new Headers({
      'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
    let options = new RequestOptions({
      responseType: ResponseContentType.Blob
    });
    return this.http.get(`${this.baseUrl}/customers/download`, options)
      .map((response: Response) => new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
      );
  }

  uploadCustomers(file: File): Observable<void> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(`${this.baseUrl}/customers`, formData);
  }

  

  //Accounting services
  //Ledgers Migration
  getLedgersTemplate(): Observable<Blob> {
    let headers = new Headers({
      'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
    let options = new RequestOptions({
      responseType: ResponseContentType.Blob
    });
    return this.http.get(`${this.baseUrl}/ledgers/download`, options)
      .map((response: Response) => new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
      );
  }

  uploadLedgers(file: File): Observable<void> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(`${this.baseUrl}/ledgers`, formData);
  }

  //SubLedgers Migration
  getSubLedgersTemplate(): Observable<Blob> {
    let headers = new Headers({
      'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
    let options = new RequestOptions({
      responseType: ResponseContentType.Blob
    });
    return this.http.get(`${this.baseUrl}/subLedgers/download`, options)
      .map((response: Response) => new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
      );
  }

  uploadSubLedgers(file: File): Observable<void> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(`${this.baseUrl}/subLedgers`, formData);
  }

  //Ledgers Account Migration
  accountTemplate(): Observable<Blob> {
    let headers = new Headers({
      'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
    let options = new RequestOptions({
      responseType: ResponseContentType.Blob
    });
    return this.http.get(`${this.baseUrl}/accounts/download`, options)
      .map((response: Response) => new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
      );
  }

  uploadAccount(file: File): Observable<void> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(`${this.baseUrl}/accounts`, formData);
  }

   //Jornal  Entry Migration
   journalEntryTemplate(): Observable<Blob> {
    let headers = new Headers({
      'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
    let options = new RequestOptions({
      responseType: ResponseContentType.Blob
    });
    return this.http.get(`${this.baseUrl}/journal/download`, options)
      .map((response: Response) => new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
      );
  }

  uploadJournalentry(file: File): Observable<void> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(`${this.baseUrl}/journal`, formData);
  }



  //Identity services
  //users Migration
  userTemplate(): Observable<Blob> {
    let headers = new Headers({
      'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
    let options = new RequestOptions({
      responseType: ResponseContentType.Blob
    });
    return this.http.get(`${this.baseUrl}/users/download`, options)
      .map((response: Response) => new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
      );
  }

  uploadUser(file: File): Observable<void> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(`${this.baseUrl}/users`, formData);
  }

  //Tellers services
  //Teller Migration
  tellerTemplate(): Observable<Blob> {
    let headers = new Headers({
      'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
    let options = new RequestOptions({
      responseType: ResponseContentType.Blob
    });
    return this.http.get(`${this.baseUrl}/tellers/download`, options)
      .map((response: Response) => new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
      );
  }

  uploadTellers(file: File): Observable<void> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(`${this.baseUrl}/tellers`, formData);
  }


  //Group services
  //Group Migration
  groupTemplate(): Observable<Blob> {
    let headers = new Headers({
      'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
    let options = new RequestOptions({
      responseType: ResponseContentType.Blob
    });
    return this.http.get(`${this.baseUrl}/group/download`, options)
      .map((response: Response) => new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
      );
  }

  uploadGroup(file: File): Observable<void> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(`${this.baseUrl}/group`, formData);
  }

  //Group definition 
  groupDefintionTemplate(): Observable<Blob> {
    let headers = new Headers({
      'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
    let options = new RequestOptions({
      responseType: ResponseContentType.Blob
    });
    return this.http.get(`${this.baseUrl}/group/definition//download`, options)
      .map((response: Response) => new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
      );
  }

  uploadGroupDefinition(file: File): Observable<void> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(`${this.baseUrl}/group/definition/`, formData);
  }

  //Potfolio services
  // Loan Products Migration
   productTemplate(): Observable<Blob> {
    let headers = new Headers({
      'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
    let options = new RequestOptions({
      responseType: ResponseContentType.Blob
    });
    return this.http.get(`${this.baseUrl}/products/download`, options)
      .map((response: Response) => new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
      );
  }

  uploadProduct(file: File): Observable<void> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(`${this.baseUrl}/products`, formData);
  }

  //Deposit Account services
  //Products Definition Migration
  productDefinitionTemplate(): Observable<Blob> {
    let headers = new Headers({
      'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
    let options = new RequestOptions({
      responseType: ResponseContentType.Blob
    });
    return this.http.get(`${this.baseUrl}/product/definition/download`, options)
      .map((response: Response) => new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
      );
  }

  uploadProductDefinition(file: File): Observable<void> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(`${this.baseUrl}/product/definition/`, formData);
  }

  //Products Instance Migration
  productInstanceTemplate(): Observable<Blob> {
    let headers = new Headers({
      'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
    let options = new RequestOptions({
      responseType: ResponseContentType.Blob
    });
    return this.http.get(`${this.baseUrl}/product/instance//download`, options)
      .map((response: Response) => new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
      );
  }

  uploadProductInstance(file: File): Observable<void> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(`${this.baseUrl}/product/instance/`, formData);
  }

  //Action  Migration
  actionTemplate(): Observable<Blob> {
    let headers = new Headers({
      'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
    let options = new RequestOptions({
      responseType: ResponseContentType.Blob
    });
    return this.http.get(`${this.baseUrl}/action/download`, options)
      .map((response: Response) => new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
      );
  }

  uploadAction(file: File): Observable<void> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(`${this.baseUrl}/action`, formData);
  }

   //provioner
  //tenant
  tenantTemplate(): Observable<Blob> {
    let headers = new Headers({
      'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
    let options = new RequestOptions({
      responseType: ResponseContentType.Blob
    });
    return this.http.get(`${this.baseUrl}/tenants/download`, options)
      .map((response: Response) => new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
      );
  }

  uploadTemant(file: File): Observable<void> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(`${this.baseUrl}/tenant`, formData);
  }

}