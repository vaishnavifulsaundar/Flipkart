import { Component } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
public totalItem:any;
public  form :any;

  constructor(private cartservice:CartService){}

  ngOnInit(){
    this.cartservice.getProducts().subscribe(res=>{
      this.totalItem = res.length
      })
  }


}
