import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrl: './api-data.component.css'
})
export class ApiDataComponent {
  apiData: any; 

  constructor(private apiService: ApiService) {}

  fetchData() {
    this.apiService.getData('/users')
      .subscribe(data => {
        this.apiData = data;
      });
  }
}
