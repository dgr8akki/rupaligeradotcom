"use server";

import { cookies } from "next/headers";

export async function verifyWorkPassword(
  password: string
): Promise<{ success: boolean; error?: string }> {
  const correctPassword = process.env.WORK_PASSWORD;

  if (!correctPassword) {
    console.error("WORK_PASSWORD environment variable not set");
    return { success: false, error: "Configuration error" };
  }

  if (password === correctPassword) {
    // Set a secure HTTP-only cookie
    const cookieStore = await cookies();
    cookieStore.set("work_access", "granted", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return { success: true };
  }

  return { success: false, error: "Incorrect password" };
}

export async function revokeWorkAccess(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete("work_access");
}
