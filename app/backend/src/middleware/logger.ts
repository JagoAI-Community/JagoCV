import { Request, Response, NextFunction } from 'express';

const METHOD_COLORS: Record<string, string> = {
  GET: '\x1b[34m',
  POST: '\x1b[32m',
  PUT: '\x1b[33m',
  PATCH: '\x1b[33m',
  DELETE: '\x1b[31m',
};

const RESET = '\x1b[0m';
const DIM = '\x1b[2m';

/**
 * Middleware HTTP logger — mencatat method, path, status, dan durasi setiap request.
 */
export function httpLogger(req: Request, res: Response, next: NextFunction): void {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    const methodColor = METHOD_COLORS[req.method] ?? RESET;
    const statusColor =
      res.statusCode >= 500 ? '\x1b[31m'
      : res.statusCode >= 400 ? '\x1b[33m'
      : '\x1b[32m';

    console.log(
      `${methodColor}${req.method.padEnd(7)}${RESET} ` +
      `${req.originalUrl.padEnd(30)} ` +
      `${statusColor}${res.statusCode}${RESET} ` +
      `${DIM}${duration}ms${RESET}`
    );
  });

  next();
}
