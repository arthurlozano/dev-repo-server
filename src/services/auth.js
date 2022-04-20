import bcrypt from "bcryptjs";

export function createPasswordHash(password) {
  return bcrypt.hash(password, 8);
}