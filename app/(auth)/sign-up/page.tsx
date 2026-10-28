"use client";

import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validation";

const Page = () => (
  <AuthForm
    type="SIGN_UP"
    schema={signUpSchema}
    defaultValues={{
      fullName: "",
      email: "",
      password: "",
      universityId: 0,
      universityCard: "",
    }}
    onSubmit={async () => ({ success: true })}
  />
);

export default Page;