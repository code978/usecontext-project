import React, { useContext } from "react";
import InputHooks from "../Hooks/InputHooks";
import { ContactData } from "../Context/ContactData";
import uuid from "uuid-random";

const ContactForm = () => {
  const { addnewContact } = useContext(ContactData);
  const [name, setname, clearname] = InputHooks("");
  const [email, setemail, clearemail] = InputHooks("");
  const [phone, setphone, clearphone] = InputHooks("");

  const addNewContact = (e) => {
    e.preventDefault();
    addnewContact({ id: uuid(), name: name, email: email, phone: phone });
    clearname("");
    clearemail("");
    clearphone("");
  };

  return (
    <form onSubmit={addNewContact}>
      <div className="form-group">
        <h3>Add Contact</h3>
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          name="name"
          placeholder="Enter Name"
          value={name}
          onChange={setname}
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={setemail}
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="phone"
          name="phone"
          placeholder="Enter phone"
          value={phone}
          onChange={setphone}
        />
      </div>
      <div className="form-group">
        <input
          className="btn btn-info btn-block"
          type="submit"
          value="Add Contact"
          onChange=""
        />
      </div>
    </form>
  );
};

export default ContactForm;
