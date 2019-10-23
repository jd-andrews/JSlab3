"use strict";

/* Establishes class AddressBook*/
class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    let contact = new Contact(
      name,
      email,
      phone,
      relation
    ); /* creates new Contact in contacts */
    this.contacts.push(contact); /* pushes contact into contacts array*/
  }
  deletAt(index) {
    this.contacts.splice(
      index,
      1
    ); /*removes contact at certain index via splice */
  }
}

/*Establishes Contact class*/
class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

const addressBook = new AddressBook(); /* creates variable book with AddressBook class */
addressBook.add("David Andrews", "david814@aol.com", "313-313-3131", "Father");
addressBook.add("Karen Andrews", "kles@aol.com", "248-248-2484", "Mother");
addressBook.add("JD Andrews", "jdandrews357@gmail.com", "313-908-3007", "self");
addressBook.add("Cosmo Andrews", "dog@god.dog", "010-010-0110", "dog");
addressBook.add("Tasha Andrews", "doggo@god.dog", "010-010-0110", "dog");
addressBook.add("Imaginary Member", "lol@try.me", "800-813-5101", "joke");
addressBook.deletAt(5);
/* first try at print function where
it required .contacts notation in the parameter*/
// const print = function(addressBook) {
//   for (const item of addressBook) {
//     console.log(item);
//   }
// };

// print(book.contacts);

/* final version where dot notation is used in the function */
const printFinal = function(addressBook) {
  for (const item of addressBook.contacts) {
    console.log(item);
  }
};

printFinal(addressBook);
