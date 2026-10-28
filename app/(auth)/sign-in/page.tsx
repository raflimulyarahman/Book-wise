"use client";

import AuthForm from "@/components/AuthForm";
import { signInWithCredential } from "@/lib/actions/auth";
import { signInSchema } from "@/lib/validation";

const Page = () => (
  <AuthForm
    type="SIGN_IN"
    schema={signInSchema}
    defaultValues={{
      email: "",
      password: "",
    }}
    onSubmit={signInWithCredential}
  />
);

export default Page;