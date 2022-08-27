import jwt from "jsonwebtoken";
import "dotenv/config";

const authenticateUesr = (req, res, next) => {
  const token = req.header("auth-token");

  if (!token) {
    return res.status(401).send("You are not authenticated");
    // throw Error("You are not authenticated");
  }
  try {
    const verifyTokne = jwt.verify(token, process.env.SECRET_PASS);
    req.user = verifyTokne;
    next();
  } catch (err) {
    res.status(401).send("Invalid Token");
  }
};
export default authenticateUesr;
