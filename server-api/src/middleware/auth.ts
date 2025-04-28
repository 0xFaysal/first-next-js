import { Request, Response, NextFunction } from 'express';

const auth = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized access' });
    }

    // Here you would typically verify the token
    // For example, using a library like jsonwebtoken
    // jwt.verify(token, secretKey, (err, decoded) => {
    //     if (err) {
    //         return res.status(403).json({ message: 'Invalid token' });
    //     }
    //     req.user = decoded; // Attach user info to request
    //     next();
    // });

    // For now, we'll just call next() to proceed
    next();
};

export default auth;