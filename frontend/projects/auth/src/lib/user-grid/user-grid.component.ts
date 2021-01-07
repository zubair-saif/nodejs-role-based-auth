import { Component, OnInit } from '@angular/core';
import {MessageService, SelectItem} from 'primeng/api';

@Component({
  selector: 'lib-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.css'],
  providers: [MessageService],
  styles: [`
      :host ::ng-deep .p-cell-editing {
          padding-top: 0 !important;
          padding-bottom: 0 !important;
      }
  `]
})
export class UserGridComponent implements OnInit {

  products2 =[
              {id:1,firstName:'zubair',email:'zubairsaif700@gmail.com',isadmin:true},
              {id:2,firstName:'fahad',email:'fahadarif@gmail.com',isadmin:false},
              {id:3,firstName:'zubair',email:'zubairsaif780@gmail.com',isadmin:true},
            ];

  statuses: SelectItem[];

  clonedProducts: { [s: string]: any; } = {};

  constructor( private messageService: MessageService) { }

  ngOnInit() {
      // this.products2.getProductsSmall().then(data => this.products2 = data);

    //   this.statuses = [{label: 'sdsd', value: 'dfdfdf'},{label: 'sdsdsd', value: 'sdsd'},{label: 'sdsdsd', value: 'sdsdsd'}]
  }

  onRowEditInit(product: any) {
      this.clonedProducts[product.id] = {...product};
  }

  onRowEditSave(product: any) {
      if (product.id) {
          delete this.clonedProducts[product.id];
          this.messageService.add({severity:'success', summary: 'Success', detail:'user updated'});
      }  
      else {
          this.messageService.add({severity:'error', summary: 'Error', detail:'Invalid Price'});
      }
  }

  onRowEditCancel(product: any, index: number) {
      this.products2[index] = this.clonedProducts[product.id];
      delete this.products2[product.id];
  }

}
