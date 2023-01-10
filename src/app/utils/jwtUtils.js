import jwt from "jsonwebtoken";

const handleToken = (data, privateKey, expiresIn) => {
  try {
    return jwt.sign(data, privateKey, {
      expiresIn,
    });
  } catch (error) {
    console.log(error);
  }
};

const verifyToken = (token, privateKey) => {
  try {
    const decoded = jwt.verify(token, privateKey);
    return decoded;
  } catch (error) {
    console.log("verifyToken" + error);
  }
};

const jwtUtils = {
  accessToken: (data) => {
    return handleToken(
      data,
      process.env.ACCESS_TOKEN_KEY,
      process.env.EXPIRES_IN
    );
  },

  refreshToken: (data) => {
    return handleToken(
      data,
      process.env.REFRESH_TOKEN_KEY,
      process.env.EXPIRES_IN_REFRESH
    );
  },
};

export { verifyToken };
export default jwtUtils;
