
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataMigrationComponent } from './data-migration.component';
import { DataMigrationRoutes } from './data-migration.routing';

import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatTooltipModule,
    MatCardModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatStepperModule
} from '@angular/material';
import { OfficeDatamigrationComponent } from './microservice/officeDatamigration/office-datamigration.component';
import { EmployeeDatamigrationComponent } from './microservice/EmployeeDatamigration/employee-datamigration.component';
import { BranchOfficeDatamigrationComponent } from './microservice/branch/branchOffice-datamigration.component';
import { LedgersDatamigrationComponent } from './microservice/Ledgers/ledgers-datamigration.component';
import { SubLedgersDatamigrationComponent } from './microservice/SubLedgers/subledgers-datamigration.component';
import { UserDatamigrationComponent } from './microservice/Users/user-datamigration.component';
import { GroupDatamigrationComponent } from './microservice/Group/group-datamigration.component';
import { ProductDatamigrationComponent } from './microservice/Loan_product/product-datamigration.component';
import { TellerDatamigrationComponent } from './microservice/teller/teller-datamigration.component';
import { AccountDatamigrationComponent } from './microservice/Ledger_Accounts/account-datamigration.component';
import { ProductDefinitionMigrationComponent } from './microservice/ProductDefinitionMigration/product-definition-migration.component';
import { ProductInstanceMigrationComponent } from './microservice/ProductInstanceMigration/product-instance-migration.component';
import { CustomersDatamigrationComponent } from './microservice/CustomersDatamigration/customers-datamigration.component';
import { ActionMigrationComponent } from './microservice/actionMigration/action-migration.component';
import { GroupDefinitionMigrationComponent } from './groupDefinition/group-definition-migration.component';

@NgModule({
    declarations: [
        DataMigrationComponent,
        OfficeDatamigrationComponent,
        EmployeeDatamigrationComponent,
        BranchOfficeDatamigrationComponent,
        LedgersDatamigrationComponent,
        SubLedgersDatamigrationComponent,
        UserDatamigrationComponent,
        AccountDatamigrationComponent,
        TellerDatamigrationComponent,
        GroupDatamigrationComponent,
        ProductDatamigrationComponent,
        ProductDefinitionMigrationComponent,
        ProductInstanceMigrationComponent,
        CustomersDatamigrationComponent,
        ActionMigrationComponent,
        GroupDefinitionMigrationComponent
       
    ],
    imports: [
        RouterModule.forChild(DataMigrationRoutes),
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatTooltipModule,
        MatCardModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatStepperModule
    ],
    providers: [],
})
export class DataMigrationModule { }
