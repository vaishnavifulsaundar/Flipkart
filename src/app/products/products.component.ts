import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  public List:any[]=[];
  public filterCategory :any;
  searchKey:string ='';
  images = ['img1', 'img2', 'img3'];
//  img1 ="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/6cd4f58ce14ba48d.jpg?q=20";
 img1 = "https://rukminim2.flixcart.com/fk-p-flap/50/50/image/64d14ed529b90b37.jpg?q=50"


  constructor(private service :DataService,private cart:CartService){}

  ngOnInit(){
    this.service.getProducts().subscribe((res)=>{
     this.List = res;
     this.filterCategory =res;
     this.List.forEach((a:any) => {
      if(a.category ==="women's clothing" || a.category ==="women's clothing"){
        a.category ="fashion"
      }
      Object.assign(a,{quantity:1,total:a.price})

    })
  })
  this.cart.search.subscribe((val:any)=>{
    this.searchKey = val;
})
}


addtoCart(item:any){
  debugger
  this.cart.addtoCart(item);
}


filter(category:string){
  this.filterCategory = this.List
  .filter((a:any)=>{
    if(a.category == category || category==''){
      return a;
    }
  })
}
}
