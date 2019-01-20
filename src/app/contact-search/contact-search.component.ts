import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.scss']
})
export class ContactSearchComponent implements OnInit {
  contacts: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getContacts().subscribe(data => {
      this.contacts = data
      console.log(this.contacts);
    }
  );
  }

}
