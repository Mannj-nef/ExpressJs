import bcrypt from "bcrypt";

export function handleHashComparePassword(password, hash) {
  const result = bcrypt.compareSync(password, hash);

  return result;
}

export function handleHashPassword(data) {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(data.password, salt);

  const newUser = {
    ...data,
    password: hash,
  };
  return newUser;
}

// function handleHashPassword(data) {
//   const saltRounds = 10;
//   const salt = bcrypt.genSaltSync(saltRounds);
//   const hash = bcrypt.hashSync(data.password, salt);

//   const newUser = {
//     ...data,
//     password: hash,
//   };

//   return newUser;
// }

// export default handleHashPassword;
