import { FastifyInstance } from 'fastify';
import { createUserHandler } from './controller';
import { surveySchema } from './schema';
import surveyRouter from './router';

//TODO: avoid mock functions

describe('surveyRouter', () => {
  let fastify: FastifyInstance;

  beforeEach(() => {
    fastify = {} as FastifyInstance;
    fastify.post = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should register the /survey route with the expected schema and handler', async () => {
    await surveyRouter(fastify);
    expect(fastify.post).toHaveBeenCalledTimes(1);
    expect(fastify.post).toHaveBeenCalledWith('/survey', { schema: surveySchema }, createUserHandler);
  });
});