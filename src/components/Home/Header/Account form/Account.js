import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/fontawesome-free-solid";
import "./Account.css";

const Account = () => {
  const [toggleForm, setToggleForm] = useState(true);

  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);

  const handleForm = () => {
    setToggleForm(!toggleForm);
  };

  const handleClick = () => {
    setRegister(!register);
    setLogin(!login);
  };

  return (
    <div className={toggleForm ? "account-form active" : "account-form"}>
      <div id="close-form">
        <FontAwesomeIcon icon={faTimes} size="1x" onClick={handleForm} />
      </div>
      <div className="buttons">
        <span
          className={login ? "btn active login-btn" : "btn login-btn"}
          onClick={handleClick}
        >
          Нэвтрэх
        </span>
        <span
          className={register ? "btn active register-btn" : "btn register-btn"}
          onClick={handleClick}
        >
          Бүртгүүлэх
        </span>
      </div>
      {/* ************************************************* */}
      {/* ************************************************* */}
      {/* ************************************************* */}
      <form action="" className={login ? "login-form active" : "login-form"}>
        <input
          type="email"
          placeholder="нэвтрэх нэрээ оруулна уу..."
          className="box"
        />
        <input
          type="password"
          placeholder="нууц үгээ оруулна уу..."
          className="box"
        />
        <div className="flex">
          <input type="checkbox" name="" id="remember-me" />
          <label for="remember-me">намайг сануул</label>
          <link href="#">нууц үгээ мартсан уу?</link>
        </div>
        <input type="submit" value="нэвтрэх" className="btn" />
      </form>
      {/* ************************************************* */}
      {/* ************************************************* */}
      {/* ************************************************* */}
      <form
        className={register ? "register-form active" : "register-form"}
        action=""
      >
        <input
          type="email"
          placeholder="нэвтрэх нэрээ оруулна уу..."
          className="box"
        />
        <input
          type="password"
          placeholder="нэвтрэх нууц үгээ оруулна уу..."
          className="box"
        />
        <input
          type="password"
          placeholder="нэвтрэх нууц үгээ давтана уу..."
          className="box"
        />
        <input type="submit" value="Бүртгүүлэх" className="btn" />
      </form>
    </div>
  );
};

export default Account;
