import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  list : any[]  = [
    {
      title:'Just for you',
      titleLink:[''],
      link:'http://...#suggestion',
      data:[1,2,3,4],
    }, {
      title:'',
      link:'http://...#suggestion',
      data:[1,2,3,4],
    },
  ];

  constructor() {

  }

  ngOnInit() {

  }

}
