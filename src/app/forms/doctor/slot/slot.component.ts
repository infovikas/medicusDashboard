import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule, NgForm } from '@angular/forms';
import { HttpService } from './../../../services/http.service';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css']
})
export class SlotComponent implements OnInit {
  selected = 'monday';

  constructor(private httpService: HttpService) { }




  ngOnInit() {
  }
  slotdata(slot: NgForm) {
    let data: any = slot.value;
    let availability = {
      day: data.day,
      [data.day]: {
        "Morning": {
          start_time: data.morningstartTime,
          end_time: data.morningendTime
        },
        "Noon": {
          start_time: data.noonstartTime,
          end_time: data.noonendTime
        },
        "Evening": {
          start_time: data.evestartTime,
          end_time: data.eveendTime
        }
      }
    }
    this.httpService.slotSend(availability)
      .subscribe(
        (data) => {
          console.log(data);
        });
  }

}
