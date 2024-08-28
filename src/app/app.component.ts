import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'consumo-servicio';

  constructor(private consume: ApiService){

  }

  public getApi():void {
    this.consume.getData('/users').subscribe(
      {
        next: (data) => console.log(data),
        error: (error) => console.log("Error en consumo:"+error),
        complete:() => {
            console.log("Completado");
        }, 
      }
    )
  };

  ngOnInit(){
    this.getApi();
  }
}
