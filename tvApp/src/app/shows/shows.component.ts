import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.sass']
})
export class ShowsComponent implements OnInit {
  search: string;

  constructor(private route: ActivatedRoute, private shows: DataService) {
    this.search = this.route.snapshot.paramMap.get('search');
    this.shows.getShows(this.search);
  }
  ngOnInit() {}

}
