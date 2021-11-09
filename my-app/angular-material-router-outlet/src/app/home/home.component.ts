import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon"; 
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { TestserviceService } from '../testservice.service';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
})

// imports:[

// ]
export class HomeComponent implements OnInit {
  employList: any;
  erroMsg: any;

  constructor(private TestserviceService: TestserviceService ) { }

  ngOnInit(): void {
    this.TestserviceService.getHomeServicedetails().subscribe(res=>{
      console.log(res)
      if(res.data){
        this.employList = res.data;
        

      }else{
        this.erroMsg = "No Data Found"
      }
    })
  }
  

}
const routes: Routes = [
  { path: 'home', component: HomeComponent},

  
];
