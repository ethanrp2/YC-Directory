import Image from "next/image";
import SignIn from "../components/sign-in";

export default function Home() {
  return (
    <>
      <h1 className="text-blue-300 text-3xl">HOME</h1>

      <SignIn></SignIn>
    </>
  );
}
