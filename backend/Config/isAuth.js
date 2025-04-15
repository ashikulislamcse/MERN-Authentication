const isAuthentication = async (req, res, next) => {
  try {
    
  } catch (error) {
    res
      .status(404)
      .json({ success: false, message: "User Authentication Error", error });
  }
};

export default isAuthentication;
