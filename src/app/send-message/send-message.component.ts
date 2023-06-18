import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})


export class SendMessageComponent implements OnInit {
  message='';
  constructor( private router: Router, private appService: AppServiceService) { }

  ngOnInit(): void {
  }
  onSend() {
    console.log('Message Send', this.message)
    this.appService.send(this.message).subscribe(result => {
      console.log("result", result)
      if(result) {
        AppServiceService.setResults(result)
        this.router.navigateByUrl('/result')
      }
    })
  }
}
