"use server";

import { eq } from "drizzle-orm";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { hash } from "bcryptjs";
import { signIn, signOut } from "@/auth";
import { headers } from "next/headers";
import ratelimit from "@/lib/ratelimit";
import { redirect } from "next/navigation";

// Helper internal (nggak diekspor): cek batas request per IP
const checkRateLimit = async () => {
  const forwarded = (await headers()).get("x-forwarded-for");
  const ip = forwarded?.split(",")[0].trim() || "127.0.0.1";

  const { success } = await ratelimit.limit(ip);

  // redirect melempar error khusus, jadi harus dipanggil di luar try/catch
  if (!success) redirect("/too-fast");
};

// Helper internal: proses login saja, tanpa rate limit
const authenticate = async (email: string, password: string) => {
  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      return { success: false, error: result.error };
    }
    return { success: true };
  } catch (error) {
    console.log(error, "Signin error");
    return { success: false, error: "Signin error" };
  }
};

export const handleSignOut = async () => {
  await signOut({ redirectTo: "/sign-in" });
};

export const signInWithCredential = async (
  params: Pick<AuthCredentials, "email" | "password">,
) => {
  await checkRateLimit();

  const { email, password } = params;
  return authenticate(email, password);
};

export const signUp = async (params: AuthCredentials) => {
  await checkRateLimit();

  const { fullName, email, password, universityId, universityCard } = params;

  // Cek apakah user sudah ada
  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (existingUser.length > 0) {
    return { success: false, error: "User already exist" };
  }

  const hashedPassword = await hash(password, 10);

  try {
    await db.insert(users).values({
      fullName,
      email,
      universityId,
      password: hashedPassword,
      universityCard,
    });

    // pakai authenticate, bukan signInWithCredential, biar limit nggak kehitung 2x
    await authenticate(email, password);

    return { success: true };
  } catch (error) {
    console.log(error, "Signup error");
    return { success: false, error: "Signup error" };
  }
};