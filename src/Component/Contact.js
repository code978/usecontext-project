import React, { useContext } from "react";

import { ContactData } from "./../Context/ContactData";
import Contactdetails from "./Contactdetails";

const Contact = () => {
  const { users } = useContext(ContactData);
  return users.length ? (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <Contactdetails user={user} />
        ))}
      </tbody>
    </table>
  ) : (
    <div>No Data</div>
  );
};

export default Contact;
