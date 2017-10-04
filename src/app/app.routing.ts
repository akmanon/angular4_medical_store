import { Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { TableComponent }   from './table/table.component';
import { TypographyComponent }   from './typography/typography.component';
import { IconsComponent }   from './icons/icons.component';
import { UpgradeComponent }   from './upgrade/upgrade.component';

export const AppRoutes: Routes = [
    {
        path: 'add',
        component: DashboardComponent
    },
    {
        path: 'search',
        component: TableComponent
    },
    {
        path: 'all',
        component: TypographyComponent
    },
    {
        path: 'tool',
        component: UpgradeComponent
    },
    { path: '', redirectTo: 'search', pathMatch: 'full'
 }
    
]
