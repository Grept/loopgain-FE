import React from "react";

export default function VerifyDelete({togglePopup, doDelete, itemName}) {

    function verifyDelete() {
        console.log("About to delete...")
        doDelete()
        togglePopup();
    }

    return (
      <section className="verifyDelete__container">
          <h3>Attention!</h3>
          <p>Are you sure you want to delete "{itemName}" from this project?</p>
          <button onClick={togglePopup}>CANCEL</button>
          <button onClick={verifyDelete}>DELETE</button>
      </section>
    );
}