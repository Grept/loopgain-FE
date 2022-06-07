import React from "react";
import "./VerifyDelete.scss";

export default function VerifyDelete({togglePopup, doDelete, itemName}) {

    // METHODS
    function verifyDelete() {
        doDelete()
        togglePopup();
    }

    // RENDER
    return (
      <section className="verifyDelete__container">
          <h3>Attention!</h3>
          <p>Are you sure you want to delete <strong>"{itemName}"</strong>?</p>
          <div className="verify__btns">
              <button className="verify__btn" onClick={togglePopup}>cancel</button>
              <button className="verify__btn" onClick={verifyDelete}>delete</button>
          </div>
      </section>
    );
}