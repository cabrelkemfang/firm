import { Routes } from "@angular/router";
import { DataMigrationComponent } from "./data-migration.component";

export const DataMigrationRoutes: Routes = [
    {
        path: '',
        component: DataMigrationComponent,
        data: { title: 'datamigration', hasPermission: { id: 'datamigration_datamigration', accessLevel: 'READ' } },
    }
];