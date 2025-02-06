const jwt = require('jsonwebtoken');
const secretKey = process.env.PRIVATE_KEY|| "your_secret_key"; // Use environment variables

const authentication = (req, res, next) => {
  try {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    const decoded = jwt.decode(token)

    if (!decoded || !decoded.role) {
      return res.status(403).json({ message: "Authentication failed: Invalid token" });
    }

    if (decoded.role === 'admin') {
      req.admin = decoded.adminId;
      next(); 
    } else {
      return res.status(403).json({ message: "Access denied: Admins only" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

module.exports = authentication;
