import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function InputPassword() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="password-input">
      <input
        className="input input-element"
        type={showPassword ? "text" : "password"}
      />
      <FontAwesomeIcon
        icon={showPassword ? faEyeSlash : faEye}
        onClick={() => setShowPassword(!showPassword)}
        className="icon"
      />
    </div>
  );
}

export default InputPassword;
