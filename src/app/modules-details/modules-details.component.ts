import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";


@Component({
  selector: 'app-modules-details',
  templateUrl: './modules-details.component.html',
  styleUrls: ['./modules-details.component.scss']
})
export class ModulesDetailsComponent implements OnInit {

  message:string;
  constructor(private data: DataService) { 
   
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }
  



}
