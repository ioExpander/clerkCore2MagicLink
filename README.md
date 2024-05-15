Sample repo to reproduce the issue : magic links seem to be broken when using core2 clerk.

Configure `.env` and run :
`pnpm install && pnpm next dev`

# Steps to reproduce

- launch next dev app
- go to http://localhost:3000
- enter email to login.
- click on the magic link => the user is not signed in **(this is the issue)**
- click on more options to receive a verification code by email
- enter the verification code
- the user is logged in

## Notes

The magic link setup worked fine with the old version (core1)
