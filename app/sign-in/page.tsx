import AuthNavbar from "../components/auth-components/auth-navbar";
import { signInAction } from "../api/auth";
import SocialSignInButton from "../components/auth-components/social-sign-in-button";

export default function SignInPage() {
  return (
    <>
      <AuthNavbar />

      <div className="flex justify-center">
        <form action={signInAction} id="container" className="mt-20">
          <h1 className="text-2xl">Sign-Up</h1>
          <input
            type="text"
            placeholder="Email"
            name="email"
            required
            className="mt-3"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            className="mt-3"
          />
          <button type="submit" className="mt-4">
            Sign In with Email
          </button>

          <p className="my-4">Or</p>

          <SocialSignInButton />
        </form>
      </div>
    </>
  );
}
