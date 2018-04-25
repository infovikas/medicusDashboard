import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-cancel-appoint',
  templateUrl: './cancel-appoint.component.html',
  styleUrls: ['./cancel-appoint.component.css']
})
export class CancelAppointComponent implements OnInit {
  toppings = new FormControl();

  pauseList = ['By Duration', 'By Slot', 'Pause All'];

  constructor() { }

  ngOnInit() {
  }

}
