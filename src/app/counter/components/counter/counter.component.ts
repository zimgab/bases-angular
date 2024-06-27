
import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template:`

  <h3>
  Contador {{counter}}
</h3>
<button (click)="incrementBy(+1)">+ 1</button>
<button (click)="reset()">Reset</button>
<button (click)="incrementBy(-1)">- 1</button>
<br>



  `
})
export class CounterComponent {



    public counter:number = 10;

    incrementBy( value: number):void{

        this.counter += value;

      }
      reset(){
        this.counter = 10;
      }

}
