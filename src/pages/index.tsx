import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <h1>User is logged in</h1>
      <UserButton
        appearance={{
          elements: {
            userButtonPopoverActionButton__manageAccount: {
              display: "none",
            },
          },
        }}
      />
    </main>
  );
}
