import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.scss']
})
export class ContactSearchComponent implements OnInit{
  @Input() contacts = []; 
  @Output() display = new EventEmitter();
  searchContact: string;

  constructor(private data: DataService) { }
  
  ngOnInit() {    
    this.data.getContacts().subscribe(data => this.contacts = data);
  }

  onClick (contact){
    this.display.emit(contact)
  }

}
