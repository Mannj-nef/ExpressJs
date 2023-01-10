import { verifyToken } from "../utils/jwtUtils.js";
import { Message } from "../../configs/constant/message.js";
import { ROLE } from "../../enums/constant.js";

const middlewareAuthor = {
  verifyTokenAuthor(req, res, next) {
    const token = req.header.token;
    console.log(token);
    const { id } = req.body;
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
        return;
      }
      if (decodedToken.id === id || decodedToken.role === ROLE.ADMIN) {
        req.user = decodedToken;
        next();
      } else {
        res.status(401).json({
          statusMessage: Message.NOT_AUTHORIZED,
        });
      }
    }
  },
};

export default middlewareAuthor;
