import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { ProductService } from '../product.service';
//import { FirebaseListObservable } from 'angularfire2/database';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDetailPage(clickedLegoSet) {
    this.router.navigate(['', clickedLegoSet.$key]);
  }

}
