import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
public cardItemList:any[]=[];
public productList = new BehaviorSubject<any>([]);
public search = new BehaviorSubject<string>("");


  constructor() { }

  getProducts(){
    debugger
    return this.productList.asObservable();
  }

 setProduct(product:any){
  debugger
  this.cardItemList.push(...product);

 }

addtoCart(product:any){
  debugger
  this.cardItemList.push(product);
  this.productList.next(this.cardItemList)
  this.getTotalPrice();
}

removeCartItem(product:any){
  this.cardItemList.map((a:any,index:any)=>{
    if(product.id === a.id){
      this.cardItemList.splice(index,1)
    }
  })
  this.productList.next(this.cardItemList)
}

removeAllItem(){
  this.cardItemList =[];
  this.productList.next(this.cardItemList)
}


getTotalPrice(): number {
  debugger
  let grandTotal = 0;
  this.cardItemList.map((a: any) => {
    grandTotal += a.total
  })
  return grandTotal
}

 
}


// getTotalPrice(): number {
//   let grandTotal = 0;
//   this.cartItemList.map((a: any) => {
//     grandTotal += a.total
//   })
//   return grandTotal
// }


