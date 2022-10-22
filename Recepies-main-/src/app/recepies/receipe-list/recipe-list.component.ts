import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {

  recepies: Recipe [] = [

    new Recipe('Reteta test', 'text', 'https://pofta-buna.com/wp-content/uploads/2022/01/prajitura-cu-ciocolata-si-vanilie-4-700x420.jpg'),
    new Recipe('Reteta test', 'text', 'https://pofta-buna.com/wp-content/uploads/2022/01/prajitura-cu-ciocolata-si-vanilie-4-700x420.jpg')

  ];

  constructor() { } 

  ngOnInit(): void {
  }

}
