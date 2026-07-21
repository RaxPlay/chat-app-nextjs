import AuthNavbar from "../components/auth-components/auth-navbar";
import { signInAction } from "../api/auth";
import SocialSignInButton from "../components/auth-components/social-sign-in-button";

export default function SignInPage() {
  return (
    <>
      <AuthNavbar />

      <div>
        <form action={signInAction}>
          <input type="text" placeholder="Email" name="email" required />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />

          <button type="submit">Sign In</button>
        </form>
        or
        <SocialSignInButton />
      </div>
    </>
  );
}
