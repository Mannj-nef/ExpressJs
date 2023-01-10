import { Message } from "../../configs/constant/message.js";
import { verifyToken } from "../utils/jwtUtils.js";

const middlewareAuthen = {
  verifyTokenAuthen: (req, res, next) => {
    const token = req.header.token;
    if (!token) {
      res.status(401).json({
        statusMessage: Message.NOT_AUTHORIZED,
      });
    } else {
      const accessToken = token.split(" ")[1];
      const decodedToken = verifyToken(
        accessToken,
        process.env.ACCESS_TOKEN_KEY
      );
      if (!decodedToken) {
        res.status(401).json({
          statusMessage: Message.TOKEN_NOT_VALID,
        });
      }
      req.user = decodedToken;
      next();
    }
  },
};

export default middlewareAuthen;
