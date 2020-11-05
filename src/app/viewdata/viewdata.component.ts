import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {ListService} from '../list.service'


@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css']
})
export class ViewdataComponent implements OnInit {
  searchText;

  constructor(private list:ListService) { }
  collection:any=[];

  ngOnInit(): void {
    this.list.getList().subscribe((result)=>{
      console.log(result);
      this.collection=result
    })
  }

}
