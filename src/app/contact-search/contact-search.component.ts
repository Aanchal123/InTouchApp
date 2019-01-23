import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.scss']
})
export class ContactSearchComponent implements OnInit{
  contacts: any;
  searchContacts: any;
  subs: Subscription; 
  p: any;

  userDetails = {
    Anniversary: "",
    Birthday: "",
​​​    "Business Address":"",
​    "Business Address 2": "",
​​​    "Business City": "",
​​​    "Business Country": "",
​​​    "Business Fax": "",
​​    "Business Phone": "",
​​    "Business Postal Code": "",
​​​    "Business State": "",
​​​     Categories: "",
​​​    "Country Code": "",
​​​     Department: "",
​​​    "Display Name": "",
​​​    "E-mail 2 Address": "",
​​​    "E-mail 3 Address": "",
​​​    "E-mail Address": "",
​    "First Name": "",
​​​     Gender: "",
​​​     "Home Address 2": "",
​​​     "Home City": "",
​​​     "Home Country": "",
​​​     "Home Fax": "",
​​​     "Home Phone": "",
​​​     "Home Postal Code": "",
​​​     "Home State": "",
​​​     "Home Street": "",
​​​     "Job Title": "",
​​     "Last Name": "",
​​​     "Mobile Phone": "",
​     Nickname: "",
​​     Notes: "",
​​     Organization: "",
​​​     Pager: "",
​​​     "Related name": "",
​​​     "Web Page": "",​​​
     "Web Page 2": ""
  }



  constructor(private data: DataService) {
    this.getContactList();
   }
  
  ngOnInit() {      
  
  }

  getContactList() {    
    this.subs =  this.data.getContacts()
    .subscribe(res => {
      this.contacts = this.searchContacts = res;  
      console.log("LOG DATA:", res);    
      this.userDetails = this.contacts[0];
      
    });
    
  }

  search(query: string) {
    console.log(/^[0-9]+$/.test(query));
    if( /^[0-9()-]+$/.test(query) ) {
      console.log('in if');
      this.searchContacts = (query) ?
      this.contacts.filter(c => c['Home Phone'].includes(query)) :
      this.contacts;
    } else {
      this.searchContacts = (query) ?
      this.contacts.filter(c => c['First Name'].toLowerCase().includes(query.toLowerCase())) :
      this.contacts;
    }
  }

  getDetails(user) {
    console.log(user);
    this.userDetails = user;
  }

  ngOnDestroy() {
     this.subs.unsubscribe();
    
  }

}
