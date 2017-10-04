import { Component, OnInit } from '@angular/core';
declare var $:any;
export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'search', title: 'Search Medicine',  icon:'ti-search', class: '' },
    { path: 'add', title: 'Add Medicine',  icon: 'ti-save', class: '' },
    { path: 'all', title: 'All Medicine',  icon:'ti-align-justify', class: '' },
    { path: 'tool', title: 'Tools Used',  icon:'ti-export', class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

}
