import React from "react";
import "./ContactPage.css";
import ContactForm from "../../components/ContactForm/ContactForm.js";

function ContactPage() {
  const isBackgroundDark = true;

  return (
    <div
      style={{
        backgroundColor: isBackgroundDark ? "#d4b668" : "light",
      }}
    >
      <ContactForm />
    </div>
  );
}

export default ContactPage;
