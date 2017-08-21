import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {

  power: number
  human: number

  onSubmit(){
    this.power = this.power
    this.human = this.power * 10
    console.log("Submit on power.ts")
  }

  constructor() { }

  ngOnInit() {

  }

}
