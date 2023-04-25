import { FastifyRequest, FastifyReply } from "fastify";
import { createEventTicket } from "./service";
import { EventTicket } from "../../event-client";

export async function createEventTicketHandler(
  request: FastifyRequest<{ Body: EventTicket }>,
  reply: FastifyReply
): Promise<void> {
  const eventTicket = request.body;
  const createdEventTicket = await createEventTicket(eventTicket);
  reply.send(createdEventTicket);
}
