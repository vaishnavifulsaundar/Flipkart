import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  public product:any[]=[];
  public grandTotal:any;


  constructor(private cardservice:CartService){}

  ngOnInit(){
    debugger
  this.cardservice.getProducts().subscribe((res)=>{
  this.product = res
  this.grandTotal = this.cardservice.getTotalPrice();
console.log(this.product)
})
  }

  removeItem(item:any){
 this.cardservice.removeCartItem(item)
  }

  emptyCart(){
    this.cardservice.removeAllItem()
  }


}
