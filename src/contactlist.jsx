import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ContactRow from "./ContactRow";

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];
const makeRow = (contact) =>{
  return <ContactRow key={contact.id} setSelectedContentId={setSelectedContactId} contact={contact} />
}

const ContactList = ({ setSelectedContactId }) => {
  const getData = async() => {
    const content = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users`)
    const contentJSON = await content.json()
    setContacts(contentJSON)
  }
  const makeRow = (contact) =>{
    return <ContactRow key={contact.id} setSelectedContactId={setSelectedContactId} contact={contact} />
  }
  const [contacts, setContacts]=useState([])
  useEffect(()=> {
    getData()
  }, [])
  return ( 
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {
          contacts.map(makeRow)
           // Map over data here
         }
      </tbody>
    </table>
); 
}
export default ContactList