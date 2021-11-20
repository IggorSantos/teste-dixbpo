import { Component, OnInit } from '@angular/core';
import {SalesService} from '../../services/sales.service'
import {Sales} from '../../models/sales.model'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
sales:any[] = []

  constructor(private service: SalesService) { }
  ngOnInit(){


    this.service.list()
    .subscribe(data => this.sales = data)

  }


}
