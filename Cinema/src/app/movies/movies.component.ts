import { Component, OnInit} from '@angular/core';
import { Movie } from '../shared/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {


  showCheckBox:boolean;
  movies:Movie[] = [
      new Movie('001','Planet Of Apes','English','Panjagutta, Hyderabad', '4:30 PM', 3.4,'http://s3.foxmovies.com/foxmovies/production/films/1/images/posters/366-asset-page.jpg',true),
      new Movie('002','Spiderman','English','Bangalore, Hyderabad','5:60 PM', 4.4,'https://cdn.vox-cdn.com/uploads/chorus_asset/file/8571065/spider_man_poster2.jpg',false),
      new Movie('003','Transformers','English','Telangana, Hyderabad','5:60 PM', 4.4,'http://cdn1-www.comingsoon.net/assets/uploads/2016/08/transformersTLKheader.jpg',true),
      new Movie('004','Patel S.I.R','Telegu','Inorbit Mall, Hyderabad','5:60 PM', 4.4,'https://1.bp.blogspot.com/-KVSA6hbyKQQ/WWNb-emvBVI/AAAAAAAAljE/yRXrrFsPz-MFyUa3vLml1RqewAPsy9a2gCLcBGAs/s1600/patel-1.jpg',false),
        
  ]
   
  constructor() { }
   
  ngOnInit() {
  }
  onNotify(discount){
      alert("Discount you get is " + discount + "%");
  }
 deleteSelectedChecked(status){
   alert("Clicked")
 }

 enableCheckbox(e){
    this.showCheckBox = e.target.checked;
 }
}
