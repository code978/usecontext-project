import React from "react";
import "./styles.css";
import "bootswatch/dist/materia/bootstrap.min.css";
import Navbar from "./Component/Layout/Navbar";
import ContactDataProvider from "./Context/ContactData";
import Contact from "./Component/Contact";
import ContactForm from "./Component/ContactForm";

const App = () => {
  return (
    <>
      <>
        <Navbar />
        <div className="container mt-5">
          <ContactDataProvider>
            <ContactForm />
            <Contact />
          </ContactDataProvider>
        </div>
      </>
    </>
  );
};

export default App;
