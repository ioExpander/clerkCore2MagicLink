import { SignIn, useAuth } from "@clerk/nextjs";

export default function SignInPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isLoaded, userId, sessionId, getToken } = useAuth();


  return (
    <main>
        <SignIn
          path="/sign-in"
          routing="path"
          signUpUrl="/sign-in" //Prevent new users from signing in by showing them the homepage instead of the default sign up page
          //hides the sign up link in the footer
          appearance={{
            elements: { footerAction__signIn: { display: "none" } },
          }}
        />
    </main>
  );
}
