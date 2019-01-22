// import { PipeTransform, Pipe } from '@angular/core';

// @Pipe({
//     name: 'contactsFilter'
// })
// export class ContactFilterPipe implements PipeTransform{
//     transform(contacts: Contacts[], searchContact: string): Contacts[] {
//         if (!contacts || !searchContact){
//             return contacts;
//         }
//         return contacts.filter(contact => 
//             contact.name.toLowerCase().indexOf(searchContact.toLowerCase()) !== -1);
//     }
// }