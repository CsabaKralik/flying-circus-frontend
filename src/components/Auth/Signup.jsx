import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Google from "./Google";
import Userform from "./Userform";

const signup = (email, password) => {
  let status = true;
  return fetch("/api/signup", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      if (!res.ok) {
        status = false;
      }
      return res;
    })
    .then((res) => {
      return res.json();
    })
    .then((info) => {
      if (status === true) {
        return info;
      }
      throw info;
    });
};

const Signup = (props) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const navigate = useNavigate();

  const handleSignup = (email, password) => {
    setError(null);
    setLoading(true);

    signup(email, password)
      .then(() => {
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
      {error ? <p>{error?.message ?? "unknown error"}</p> : null}
      <h2>Register</h2>
      <Userform
        title="Registration"
        onSubmit={handleSignup}
        loading={loading}
      />
      <Google />
    </div>
  );
};
export default Signup;
