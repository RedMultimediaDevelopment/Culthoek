import { FastifyRequest, FastifyReply } from 'fastify';
import { createUser } from './service';
import { User } from '../../event-client';

export async function createUserHandler(
  request: FastifyRequest<{ Body: User }>,
  reply: FastifyReply
): Promise<void> {
  const user = request.body;
  const success = await createUser(user);
  reply.send({ success });
}