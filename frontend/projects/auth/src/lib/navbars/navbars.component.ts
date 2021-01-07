import { Component, Input, OnInit } from '@angular/core';
// import {MenuItem} from 'primeng/api';

@Component({
  selector: 'lib-navbars',
  templateUrl: './navbars.component.html',
  styleUrls: ['./navbars.component.css']
})
export class NavbarsComponent implements OnInit {
  
   @Input() items 
    
  constructor() { }

  ngOnInit(): void {

    

  }

}
