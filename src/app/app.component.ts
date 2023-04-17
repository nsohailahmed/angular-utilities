import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-utilities';

  name:string = '';
  date:string = '';
  amount:number = 0;
  height:number = 0;
  miles:number = 0;

  onNameChange(nameEvent:any){
    this.name = nameEvent.target.value;
  }
  onDateChange(dateEvent:any){
    this.date = dateEvent.target.value;
  }
  onAmountChange(amountEvent:any){
    this.amount = amountEvent.target.value;
  }
  onHeightChange(heightEvent:any){
    this.height = heightEvent.target.value;
  }
  onMilesChange(mileEvent:any){
    this.miles = parseFloat(mileEvent.target.value);
  }
}
