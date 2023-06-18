import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  results:any
  message:String='';
  modele1:any;
  modele2:any;
  modele3:any;

  constructor(private appService: AppServiceService) { }

  ngOnInit(): void {
    this.results=AppServiceService.getResults();
    this.message=this.results[0]
    this.modele1=this.results[1]
    this.modele2=this.results[2]
    this.modele3=this.results[3]
    
  }

}
