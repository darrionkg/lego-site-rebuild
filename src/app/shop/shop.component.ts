import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { ProductService } from '../product.service';
//import { FirebaseListObservable } from 'angularfire2/database';
import { ShopService } from './../shop.service';
import { Lego } from './../lego.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  legos: Lego[];
  constructor(private router: Router, private shopService: ShopService) { }

  ngOnInit() {
    this.legos = this.shopService.getLegos();
  }

  goToDetailPage(clickedLegoSet) {
    this.router.navigate(['', clickedLegoSet.$key]);
  }

}
