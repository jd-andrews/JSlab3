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

//// Lab Part Two ////

const addressBook = new AddressBook();
const form = document.querySelector("#form");

function display() {
  document.querySelector("#content").innerHTML = "";
  addressBook.contacts.forEach((contact, index) => {
    const entry = document.createElement("div");
    entry.classList.add("contact");
    entry.innerHTML = `
        <p>Name: ${contact.name}</p>
        <p>Email: ${contact.email}</p>
        <p>Phone: ${contact.phone}</p>
        <p>Relation: ${contact.phone}</p>
        <i class="fa fa-trash-alt" data-index-number="${index}" aria-hidden="true"></i>`;
    document.querySelector("#content").appendChild(entry);
  });
}

display();

function addContact(event) {
  event.preventDefault();
  const formData = new FormData(form);
  addressBook.add(
    formData.get("name"),
    formData.get("email"),
    formData.get("phone"),
    formData.get("relation")
  );
  display();
  form.reset();
}

form.addEventListener("submit", addContact);

function deleteContact(event) {
  if (event.target.classList.contains("fa-trash-alt")) {
    const index = event.target.getAttribute("data-index-number");
    console.log(index);
    addressBook.deleteAt(index);
    display();
  }
}

document.querySelector("#content").addEventListener("click", deleteContact);
