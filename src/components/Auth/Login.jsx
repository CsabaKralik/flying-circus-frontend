import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Google from "./Google";
import { userContext } from "./UserContext";
import Userform from "./Userform";

const apiLogin = (email, password) => {
  let status = true;
  return fetch("/api/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error({ message: "Wrong creds" });
  });
};

const Login = (props) => {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const { login } = useContext(userContext);
  const handleLogin = (email, password) => {
    setError(null);
    setLoading(true);

    apiLogin(email, password)
      .then((user) => {
        login(user);
        navigate("/");
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      {error ? <p>{error?.message ?? "unknown error"}</p> : null}
      <Userform title="Login" onSubmit={handleLogin} loading={loading} />
      <Google />
    </div>
  );
};
export default Login;
