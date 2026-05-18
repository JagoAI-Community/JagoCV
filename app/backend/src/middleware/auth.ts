import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config';

export interface AuthRequest extends Request {
  user?: { id: string; email: string };
}

/**
 * Middleware JWT — memvalidasi Bearer token dari header Authorization.
 * Jika valid, inject `req.user` dengan payload token.
 */
export function authenticateToken(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1];

  if (!token) {
    res.status(401).json({ error: 'Akses ditolak, token hilang' });
    return;
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      res.status(403).json({ error: 'Token tidak valid atau sudah kadaluarsa' });
      return;
    }
    req.user = user as { id: string; email: string };
    next();
  });
}
