import { FastifyInstance } from 'fastify';
import { createUserHandler } from './controller';
import { surveySchema } from './schema';

export default async function surveyRouter(fastify: FastifyInstance): Promise<void> {
  fastify.post('/survey', { schema: surveySchema }, createUserHandler);
}