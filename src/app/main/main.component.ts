import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ResultsComponent } from "../results/results.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [SearchComponent, FormsModule, CommonModule, HttpClientModule, ResultsComponent]
})
export class MainComponent implements OnInit {
  searchQ: any = null;
  allData: any = [];
  onSearchQuery(query: any) {
    console.log('data from main : ', query);
    this.searchQ = query;
    this.httpClient
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      )
      .subscribe((data) => {
        this.allData = data;
        console.log(this.allData);
      });
  }
  constructor(private httpClient: HttpClient) {
    console.log('component is loaded');
  }

  ngOnInit(): void {}
}
