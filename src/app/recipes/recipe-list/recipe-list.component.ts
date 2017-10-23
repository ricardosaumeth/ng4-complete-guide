import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe', 
      'This is a simple test', 
      'http://www.seriouseats.com/recipes/assets_c/2017/10/20170826-zesty-dry-rubbed-chicken-wings-alabama-white-sauce-close-up-morgan-eisenberg-1-thumb-625xauto-439816.jpg'),
      new Recipe(
        'A Test Recipe', 
        'This is a simple test', 
        'http://www.seriouseats.com/recipes/assets_c/2017/10/20170826-zesty-dry-rubbed-chicken-wings-alabama-white-sauce-close-up-morgan-eisenberg-1-thumb-625xauto-439816.jpg'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
