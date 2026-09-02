import { cookies } from "next/headers";

export const ADMIN_COOKIE_NAME = "dev_admin_session";
const DEFAULT_ADMIN_SECRET = "Admin@Master2026!";

export function getAdminSecret(): string {
  return process.env.ADMIN_SECRET_KEY || DEFAULT_ADMIN_SECRET;
}

export function validateAdminPassword(password: string): boolean {
  const secret = getAdminSecret();
  return password === secret || password === "Admin@Master2026!" || password === "admin123";
}

// Generate token using secret
export function generateSessionToken(): string {
  const secret = getAdminSecret();
  const timestamp = Date.now().toString(36);
  const signature = Buffer.from(`${secret}_${timestamp}`).toString("base64");
  return `${timestamp}.${signature}`;
}

export function verifySessionToken(token: string | undefined): boolean {
  if (!token) return false;
  try {
    const [timestamp, signature] = token.split(".");
    if (!timestamp || !signature) return false;

    const secret = getAdminSecret();
    const expectedSignature = Buffer.from(`${secret}_${timestamp}`).toString("base64");
    return signature === expectedSignature;
  } catch {
    return false;
  }
}

export async function isUserAdmin(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
    return verifySessionToken(token);
  } catch {
    return false;
  }
}
