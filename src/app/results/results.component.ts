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
  modele4:any;
  modele5:any;
  modele6:any;
  modele7:any;


  constructor(private appService: AppServiceService) { }

  ngOnInit(): void {
    this.results=AppServiceService.getResults();
    this.message=this.results[0]
    this.modele1=this.results[1]
    this.modele2=this.results[2]
    this.modele3=this.results[3]
    this.modele4=this.results[4]
    this.modele5=this.results[5]
    this.modele6=this.results[6]
    this.modele7=this.results[7]

  }

  getResultSpam(spam:boolean):String {
    if (spam ) return 'Spam'
    else return 'Non Spam'
  }

}
