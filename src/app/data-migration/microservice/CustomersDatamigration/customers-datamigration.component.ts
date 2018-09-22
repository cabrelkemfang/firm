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
import { Component, OnInit } from '@angular/core';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { saveAs } from 'file-saver/FileSaver';
import { DatamigrationService } from '../../../services/datamigration/datamigration.service';
import { NotificationService, NotificationType } from '../../../services/notification/notification.service';
@Component({
  selector: 'fims-customers-datamigration',
  templateUrl: './customers-datamigration.component.html',
  styleUrls: ['./customers-datamigration.component.css']
})
export class CustomersDatamigrationComponent implements OnInit {
  selectedCustomersFiles: File = null;
  fileSize: number;

  constructor(
    private datamigrationService: DatamigrationService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
  }

  panelOpenState = false;

  selectFile(event) {
    this.selectedCustomersFiles = <File>event.target.files[0];
    this.fileSize = event.target.files.length;
  }

  uploadCustomer(): void {
    if (this.fileSize == 0) {
      return;
    } else {
      this.datamigrationService.uploadCustomers(this.selectedCustomersFiles).subscribe(() => {
        this.notificationService.send({
          type: NotificationType.MESSAGE,
          message: 'Customers have been successfully migrated'
        });
      });
    }
  }

  customersTemplate() {
    var reader = new FileReader();
    this.datamigrationService.getCustomersTemplate().subscribe(blob => {
      saveAs(blob,"Customers"+".xlsx");
    }, (error) => {
      console.log(error);
    })

  }

}