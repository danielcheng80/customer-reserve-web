import React from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  const handleClickLogin = () => {
    history.push("/main/overview");
  };

  return (
    <div>
      <div>
        <label>Username: </label>
        <input type="text" />
      </div>
      <div>
        <label>Password: </label>
        <input type="password" />
      </div>
      <div>
        <button onClick={handleClickLogin}>登入</button>
      </div>
    </div>
  );
};

export default Login;
