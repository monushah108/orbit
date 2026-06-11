import cookieParser from "cookie-parser";
import User from "../models/user.js";

export default async function CheckAuth(req, res, next) {
  const { sid } = req.signedCookies;
  if (!sid) {
    res.clearCookie("sid");
    return res.status(401).json({ message: " You are not logged in" });
  }

  const user = await User.findOne({ _id: sid });

  req.user = user;

  next();
}

export const socketAuth = (socket, next) => {
  cookieParser("my-secret-key")(
    socket.request,
    socket.request.res,
    async (err) => {
      if (err) {
        return next(err);
      }
      const sid = socket.request.signedCookies?.sid;

      if (!sid) return next(new Error("unauthorized"));
      const user = await User.findById(sid);
      if (!user) return next(new Error("unauthorized"));

      socket.user = user._id;

      next();
    }
  );
};
