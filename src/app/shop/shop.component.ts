import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { ShopService } from './../shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [ShopService]
})
export class ShopComponent implements OnInit {
  constructor(private router: Router, private shopService: ShopService) { }

  legos: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  ngOnInit() {
    this.legos = this.shopService.getLegos();
  }

  goToDetailPage(clickedLegoSet) {
    this.router.navigate(['', clickedLegoSet.$key]);
  }

}
