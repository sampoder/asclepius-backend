import { useState } from "react";
import Router from "next/router";
import { useUser } from "../lib/hooks";
import LoginForm from "../components/form";
import { Magic } from "magic-sdk";
import { Center } from "@chakra-ui/core";

const Login = () => {
  useUser({ redirectTo: "/", redirectIfFound: true });

  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    event.preventDefault();
  
    if (errorMsg) setErrorMsg("");

    const body = {
      email: e.currentTarget.email.value,
    };

    console.log(body.email)

    if(!body.email.includes('@')){
      setErrorMsg('Sorry, emails on that domain aren\'t allowed.')
      return
    }

    try {
      const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);
      const didToken = await magic.auth.loginWithMagicLink({
        email: body.email,
      });
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + didToken,
        },
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        Router.push("/");
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      console.error("An unexpected error happened occurred:", error);
      setErrorMsg(error.message);
    }
  }

  return (
    <>
      <Center h="100vh">
        <div className="login">
          <LoginForm errorMessage={errorMsg} onSubmit={handleSubmit} />
        </div>
      </Center>

      <style jsx>{`
        .login {
          width: 21rem;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 0.25rem;
        }
      `}</style>
    </>
  );
};

export default Login;
