import { LeftMenuService, RightMenuService } from './../shared/services/menu.service';
import { BreadcrumbsComponent } from './../shared/components/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { UserinfoComponent } from './header/userinfo/userinfo.component';
import { SysteminfoComponent } from './header/systeminfo/systeminfo.component';
import { EnterpriseinfoComponent } from './header/enterpriseinfo/enterpriseinfo.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  declarations: [LayoutComponent, HeaderComponent, MenuComponent, UserinfoComponent, SysteminfoComponent, EnterpriseinfoComponent, BreadcrumbsComponent],
  providers: [LeftMenuService, RightMenuService],
  exports: [LayoutComponent, HeaderComponent, MenuComponent],
  entryComponents: [UserinfoComponent]
})
export class LayoutModule { }
