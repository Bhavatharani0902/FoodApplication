import { Component } from '@angular/core';
import { Restaurant } from '../../../Models/restaurant';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-restaurant',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './add-restaurant.component.html',
  styleUrl: './add-restaurant.component.css'
})
export class AddRestaurantComponent {
  restaurant:Restaurant;
      constructor(private http:HttpClient,private router:Router){
        this.restaurant = new Restaurant();
      }
      addRestaurant(){
        this.http
        .post('http://localhost:5145/api/Restaurant',this.restaurant)
        .subscribe((response)=>{
          console.log(response);
        });
        this.router.navigateByUrl('admin-dashboard/getallrestaurants');
      }
}
