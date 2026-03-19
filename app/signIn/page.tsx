import { Suspense } from 'react';
import SignInForm from '../ui/signIn/SignInForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sign In"
}

export default function SignIn() {

  return (
   <Suspense fallback={<div>Loading...</div>}>
      <SignInForm />
    </Suspense>
  );
}
