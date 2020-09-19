import React, { useContext } from "react";
import { ContactData } from "../Context/ContactData";

const Contactdetails = ({ user: { id, name, email, phone } }) => {
  const { removecontact } = useContext(ContactData);

  return (
    <>
      <tr key={id}>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>
          <button onClick={() => removecontact(id)} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default Contactdetails;
