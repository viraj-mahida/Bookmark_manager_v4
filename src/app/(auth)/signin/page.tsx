import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle"
import ThemeProvider from "@/components/Theme/themeProvider";
import Link from "next/link";
// import { signIn } from "next-auth/react";
export default function Page() {
  return <div className="grid grid-cols-2 h-[100vh] ">
    <div className="m-14">
      <h1 className="text-2xl font-bold ">Sign In</h1>
      <h2 className="text-xl">Subtitle </h2>
      <ThemeProvider/>
      <Link
      // onClick={()=>signIn("google", {callbackUrl: "http://localhost:3000/"})}
        href={"/api/auth/signin/google"}
        className="flex gap-3 justify-center items-center py-6 my-4 bg-blue-200 cursor-pointer rounded-s"
      //Signs in with google oauth2
      >
        <span>
          {" "}
          <FcGoogle />
        </span>
        <span className="text-black">Continue with Google</span>
      </Link>
      <div className="flex gap-3 justify-center my-4">or</div>
      <div>
        <form  className="flex flex-col gap-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="input"
            name="email"
            placeholder="mail@example.com"
          />

          <button className="py-4 text-white bg-purple-700 rounded-s">Done</button>

          <label htmlFor="signedIn" className="flex justify-start items-center gap-2">

            <input type="checkbox" className="checkbox" name="signedIn" />
            <span> Stay logged in
            </span>

          </label>

        </form>
      </div>
    </div>
    <div className="flex flex-col gap-6 justify-center items-center bg-blue-600">
      <div className="text-4xl font-extrabold">Bookmark Manager</div>
      <div className="flex flex-col justify-center items-center mt-32">
        <Link href={`http://atomichouse.co/`} className="font-bold">
          {" "}
          Made in Atomic House
        </Link>
      </div>
    </div>
  </div>
}
