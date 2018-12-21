import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/interface/category';

@Component({
  selector: 'app-share-category',
  templateUrl: './share-category.component.html',
  styleUrls: ['./share-category.component.css']
})
export class ShareCategoryComponent implements OnInit {
  category: Category;
  constructor(private catService: CategoryService,private router: ActivatedRoute) { }

  ngOnInit() {
    this.catService.getCategoryById(parseInt(this.router.snapshot.params['id'])).subscribe(data => {
      this.category = data;
    });
  }

}
