import React, { useState, createContext } from "react";
export const ContactData = createContext();

const ContactDataProvider = (props) => {
  const [contact, setcontact] = useState([
    {
      id: 1,
      name: "Michael",
      email: "Michael@gmail.com",
      phone: "111-222-333"
    },
    { id: 2, name: "Campos", email: "Campos@gmail.com", phone: "222-111-333" },
    {
      id: 3,
      name: "seoulight",
      email: "seoulight@gmail.com",
      phone: "333-222-111"
    },
    { id: 4, name: "Alpina", email: "Alpina@gmail.com", phone: "111-222-444" }
  ]);

  const addnewContact = (contacts) => {
    console.log(contacts);
    setcontact([...contact, contacts]);
  };

  const removecontact = (id) => {
    const filter = contact.filter((contact) => contact.id !== id);
    setcontact(filter);
  };

  return (
    <>
      <ContactData.Provider
        value={{ users: contact, addnewContact, removecontact }}
      >
        {props.children}
      </ContactData.Provider>
    </>
  );
};

export default ContactDataProvider;
