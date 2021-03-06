import bcrypt from "bcryptjs";

export function createPasswordHash(password) {
  return bcrypt.hash(password, 8);
}

export function checkPassword(user, password) {
  return bcrypt.compare(password, user.password);
}