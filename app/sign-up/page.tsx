import AuthNavbar from "../components/auth-components/auth-navbar";
import { signUpAction } from "../api/auth";
import SocialSignInButton from "../components/auth-components/social-sign-in-button";

export default function SignUpPage() {
  return (
    <>
      <AuthNavbar />

      <div>
        <form action={signUpAction}>
          <input type="text" placeholder="User Name" name="email" required />
          <input type="text" placeholder="Email" name="email" required />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />

          <button type="submit">Sign Up</button>
        </form>
        or
        <SocialSignInButton />
      </div>
    </>
  );
}
