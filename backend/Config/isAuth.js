import jwt from 'jsonwebtoken';

const isAuthentication = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if(!token){
      res.status(400).json({
        success: false,
        message: "Token Not Found"
      });
    };
    const decode = await jwt.verify(token, process.env.JWT_SECRET);
    if(!decode){
      res.status(400).json({
        success: false,
        message: "Token Not Verify"
      });
    };
    req.userId = decode.userId;
    next();
  } catch (error) {
    res
      .status(404)
      .json({ success: false, message: "User Authentication Error", error });
  }
};

export default isAuthentication;
