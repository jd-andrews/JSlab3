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

  // - findByName - Has one parameter for name. Returns the first contact with the given name. Bonus: ignore case (capitalization). [use Array find]
  findByName(name) {
    const foundName = this.contacts.find(contact => contact.name === name);
    return foundName;
  }
  // - filterByRelation - Has one parameter for relation. Returns an array of all the contacts that have that relation specified. [use Array filter]
  filterByRelation(relation) {
    const foundRelation = this.contacts.filter(
      contact => contact.relation === relation
    );
    return foundRelation;
  }
  // - clear - Remove all contacts
  clear() {
    this.contacts.splice(0, this.contacts.length);
  }
  // - edit - Has five parameters: oldName, name, email, phone, relation. Replace the old contact with the given oldName, with the new - values. [might help to use Array findIndex]
  edit(oldName, name, email, phone, relation) {
    let index = this.contacts.findIndex(contact => contact.name === oldName);
    let updated = new Contact(name, email, phone, relation);
    this.contacts[index] = updated;
    return this.contacts;
  }
  // - listNames - Return an array of just the names of all the contacts. This will be an array of strings. [use Array map]
  listNames() {
    let nameList = this.contacts.map(contact => contact.name);
    console.log(nameList);
  }
  // - deleteByName - Has one parameter for name. Delete the contact with the given name.
  deleteByName(name) {
    for (const contact of this.contacts) {
      if (contact.name === name) {
        const index = this.contacts.findIndex(contact => contact.name === name);

        this.contacts.splice(index, 1);
      }
    }
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
  for (const contact of addressBook.contacts) {
    console.log(contact);
  }
};

printFinal(addressBook);

console.log(addressBook.findByName("David Andrews"));

console.log(addressBook.filterByRelation("dog"));

// // addressBook.clear(); // //

console.log(
  addressBook.edit("David Andrews", "Dave Andrews", "davi@jf", "ff", "kj")
);

addressBook.listNames();

addressBook.deleteByName("JD Andrews");

addressBook.listNames();
