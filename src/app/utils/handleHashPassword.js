import bcrypt from "bcrypt";

function handleHashPassword(data) {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(data.password, salt);

  const newUser = {
    ...data,
    password: hash,
  };

  return newUser;
}

export default handleHashPassword;
