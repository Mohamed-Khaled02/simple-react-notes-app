import React, { useState } from "react";

function Header({ darkModeHandler }) {
  return (
    <div className="header">
      <h1>Notes</h1>
      <div>
        <button className="save" onClick={darkModeHandler}>
          Toggle Mode
        </button>
      </div>
    </div>
  );
}

export default Header;
