import * as argon2 from 'argon2';
export async function hashPassword(plain: string): Promise<string> { return (argon2 as any).hash(plain); }
export async function verifyPassword(hash: string, plain: string): Promise<boolean> { return (argon2 as any).verify(hash, plain); }
