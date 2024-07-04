
import {  Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: "Trunks",
    power: 4000
  }];

  @Output()
  public onDeletedCharacter: EventEmitter<string> = new EventEmitter();

  //onDeleteCharacter(index:number):void {
    //console.log(index);
    onDeletedCharacterById( id?:string):void{
      if( !id ) return;
    this.onDeletedCharacter.emit(id);
  }

}
