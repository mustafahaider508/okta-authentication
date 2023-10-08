import { signIn, signOut, useSession } from "next-auth/react";
import Signin from "../components/Signin/index";
import Dashboard from "@/components/Dashboard";

export default function ClientSideAuth() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <>Loading...</>;
  }

  if (session) {
    return (
      <>
        <Dashboard signOut={signOut} />
        {/* You have logged in <button onClick={() => signOut()}>Sign out</button> */}
      </>
    );
  }
  return (
    <>
      <Signin signIn={signIn} />
    </>
  );
}
