import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe [] = [
    new Recipe (
      'Test Recipe',
      'The description of the Test Recipe',
      'https://cdn.pixabay.com/photo/2018/10/14/12/21/doughnuts-3746366_960_720.jpg'
      ),
    new Recipe (
      'Test Recipe',
      'The description of the Test Recipe',
      'https://cdn.pixabay.com/photo/2018/10/14/12/21/doughnuts-3746366_960_720.jpg'
      )
  ];
  constructor() { }

  ngOnInit() {
  }

}
