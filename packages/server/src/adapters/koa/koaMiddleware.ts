import { AnyRouter } from '../../core';
import { Context, Middleware } from 'koa';
import { KoaHandlerOptions } from './koaTypes';
import { nodeHTTPRequestHandler } from '../node-http';

export function createKoaMiddleware<TRouter extends AnyRouter>(
  opts: KoaHandlerOptions<TRouter>
): Middleware {
  return async (ctx: Context, next: any) => {
    const { prefix } = opts;
    const { req, res, request } = ctx;
    const endpoint = request.path.slice((prefix?.length ?? 0) + 1);

    if (prefix && !request.path.startsWith(prefix)) return next();

    res.statusCode = 200;
    await nodeHTTPRequestHandler({
      ...opts,
      req,
      res,
      path: endpoint
    })
  }
}