import { FastifyInstance } from 'fastify';
import { paymentController } from '../payment/controller';
import { paymentSchema } from '../payment/schema';

export default async function paymentRouter(fastify: FastifyInstance): Promise<void> {
  fastify.post(
    '/checkout',
    { schema: paymentSchema },
    paymentController.createSession
  );
}