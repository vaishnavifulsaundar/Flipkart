import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public totalItem:any;
  public searchTerm:any='';

  constructor(private cartservice:CartService){}

ngOnInit(){
this.cartservice.getProducts().subscribe(res=>{
this.totalItem = res.length
})
}

search(event:any){
  this.searchTerm = (event.target as HTMLInputElement).value;
  this.cartservice.search.next(this.searchTerm);

}

}
