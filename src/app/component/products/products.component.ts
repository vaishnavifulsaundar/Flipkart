import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
public productList:any;
searchKey:string ='';
public filterCategory :any

constructor(private api:ApiService,private cartservice:CartService){}

ngOnInit(){
  this.api.getProduct().subscribe(res=>{
    this.productList = res;
this.filterCategory =res;
    this.productList.forEach((a:any) => {
      if(a.category ==="women's clothing" || a.category ==="women's clothing"){
        a.category ="fashion"
      }
      Object.assign(a,{quantity:1,total:a.price})
    });

  })
    this.cartservice.search.subscribe((val:any)=>{
      this.searchKey = val;
  })
}

addtocart(item:any){
  this.cartservice.addtoCart(item)
}

filter(category:string){
  this.filterCategory = this.productList
  .filter((a:any)=>{
    if(a.category == category || category==''){
      return a;
    }
  })
}
}
