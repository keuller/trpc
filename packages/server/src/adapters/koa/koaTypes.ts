import { IncomingMessage, ServerResponse } from 'http';
import { AnyRouter } from '../../core';
import {
  NodeHTTPCreateContextFnOptions,
  NodeHTTPHandlerOptions
} from '../node-http';

export type CreateKoaContextOptions = NodeHTTPCreateContextFnOptions<
  IncomingMessage,
  ServerResponse
>;

export type KoaHandlerOptions<TRouter extends AnyRouter> = NodeHTTPHandlerOptions<
  TRouter,
  IncomingMessage,
  ServerResponse> & { prefix?: string }
