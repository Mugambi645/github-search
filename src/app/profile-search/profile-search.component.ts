import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-search',
  templateUrl: './profile-search.component.html',
  styleUrls: ['./profile-search.component.css']
})
export class ProfileSearchComponent implements OnInit {
  public userInput !: string;
  @Output() results = new EventEmitter<any>();
//search user repo
searchRepository() {
  this.results.emit(this.userInput);
}
  constructor() { }

  ngOnInit(): void {
  }

}
