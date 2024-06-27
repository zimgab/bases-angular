import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames:string[] = ['Spiderman', 'Wolverine', 'DeadPool','Thor','Luki'];
  public deleteHeroe?:string;

  public borrarUltimoHeroe():void{

    this.deleteHeroe = this.heroNames.pop();
    console.log(this.deleteHeroe)
  }

}
