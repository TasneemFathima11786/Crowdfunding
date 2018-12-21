import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/interface/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: Category[] ;
  constructor( private catService : CategoryService) { }
    

  ngOnInit() {

    this.catService.getCategoryList().subscribe(response => {
      this.categories = response;
    })
  }

}
