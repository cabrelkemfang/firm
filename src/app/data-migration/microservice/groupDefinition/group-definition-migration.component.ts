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
import { NotificationService,NotificationType } from '../../../services/notification/notification.service';


@Component({
  selector: 'fims-group-definition-migration',
  templateUrl: './group-definition-migration.component.html',
  styleUrls: ['./group-definition-migration.component.css']
})
export class GroupDefinitionMigrationComponent implements OnInit {
    selectedGroupDefinitionFiles: File = null;
  fileSize: number;

  constructor(
    private datamigrationService: DatamigrationService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
  }

  panelOpenState = false;

  selectFile(event) {
    this.selectedGroupDefinitionFiles = <File>event.target.files[0];
    this.fileSize = event.target.files.length;
  }

  uploadGroupDefinition(): void {
    if (this.fileSize == 0) {
      return;
    } else {
      this.datamigrationService.uploadGroupDefinition(this.selectedGroupDefinitionFiles).subscribe(() => {
        this.notificationService.send({
          type: NotificationType.MESSAGE,
          message: 'Group Definition have been successfully migrated'
        });
      });
    }
  }

  actionTgroupDefintionTemplateemplate() {
    var reader = new FileReader();
    this.datamigrationService.groupDefintionTemplate().subscribe(blob => {
      saveAs(blob,"Group_Definition"+".xlsx");
    }, (error) => {
      console.log(error);
    })

  }

}