"use client";

import AuthForm from "@/components/AuthForm";
import { signInSchema } from "@/lib/validation";

const Page = () => (
  <AuthForm
    type="SIGN_IN"
    schema={signInSchema}
    defaultValues={{
      email: "",
      password: "",
    }}
    onSubmit={async () => ({ success: true })}
  />
);

export default Page;