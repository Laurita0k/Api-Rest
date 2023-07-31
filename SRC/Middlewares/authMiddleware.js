
const authMiddleware = (req, res, next) => {
    const apiKey = req.headers['x-api-key']; 
    
    
    const validApiKey = "secretKey";
  
    if (apiKey === validApiKey) {
      next(); 
    } else {
      res.status(401).json({ message: 'Acceso no autorizado. Clave de API inválida.' });
    }
  };
  module.exports = authMiddleware;