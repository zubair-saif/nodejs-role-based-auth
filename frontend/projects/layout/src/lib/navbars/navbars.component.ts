import { Component, Input, OnInit } from '@angular/core';

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
