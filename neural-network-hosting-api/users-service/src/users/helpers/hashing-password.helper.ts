import * as bcrypt from 'bcrypt';

const salt: number = 10;

export const hashingPassword = (password: string): Promise<string> => {
  return bcrypt.hash(password, bcrypt.genSaltSync(salt));
};

export const comparePassword = (
  password: string,
  hashPassword: string,
): boolean => {
  return bcrypt.compareSync(password, hashPassword);
};
