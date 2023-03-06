import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {StorageService} from "../../services/storage.service";
import {environment} from "../../../environments/environment";
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
public url1: string = "";
public appVersion: string;
  constructor(private router: Router, private storageService: StorageService) {
    this.appVersion = environment.appVersion;
  }
  loginPage()
  {
    this.storageService.clear();
    this.router.navigate(['/login'])
  }

  ngOnInit() {
    this.url1 = this.router.url;
  }

}
