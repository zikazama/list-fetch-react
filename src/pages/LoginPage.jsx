import { useRef, useState } from "react";
import { useNavigate } from "react-router";

export const LoginPage = () => {
  const [error, setError] = useState("");
  const username = useRef("");
  const password = useRef("");
  let navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    console.log(username);
    const usernameInput = username.current.value;
    const passwordInput = password.current.value;
    if (usernameInput === "admin" && passwordInput === "admin") {
      //   alert("Berhasil");
      username.current.value = "";
      password.current.value = "";
      navigate("/home");
    } else {
      //   alert("Username dan Psssword Gagal");
      setError("Username dan password gagal");
      password.current.value = "";
    }
  };

  return (
    <div
      style={{
        border: "3px solid black",
        backgoundColor: "blue",
        width: "300px",
        margin: "auto",
        padding: "50px",
      }}
    >
      <div>
        <form
          onSubmit={submit}
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            gap: "10px",
          }}
        >
          <h1>Login</h1>
          {error && <h3 style={{ color: "red" }}>{error}</h3>}
          <label htmlFor="">Username</label>
          <input ref={username} name="username" type="text" />
          <label htmlFor="">Password</label>
          <input ref={password} name="password" type="password" id="" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
