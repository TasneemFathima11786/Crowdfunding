import { Injectable } from '@angular/core';
import { Category } from '../interface/category';
import { cat } from '../data/category';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})


export class CategoryService {
  categories : Category[]= cat;
  constructor() {}
  
  getCategoryList(): Observable<Category[]> {
    return of(this.categories);
  }

  getCategoryById(id:number): Observable<Category> {
    const category = this.categories.find(
      (s) => {
        return s.id=== id;
      }
    );
    return of(category);
  }

  
}
