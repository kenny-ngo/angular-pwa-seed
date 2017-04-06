import { LeftMenuService, RightMenuService } from './../../shared/services/menu.service';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { PopoverController, Platform } from 'ionic-angular';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'seed-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(public leftMenuService: LeftMenuService, public rightMenuService: RightMenuService) { }

  toggleMenu() {
    this.leftMenuService.toggleMenu();
  }

  toggleRightMenu() {
    this.rightMenuService.toggleMenu();
  }

}
