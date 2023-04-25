import {
  FastifyInstance,
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
} from "fastify";
import {
  createEventTicket,
  deleteEventTicket,
  getEventTicketById,
  getEventTickets,
  updateEventTicket,
} from "./service";

import { NotFound } from "http-errors";
import { notionGetEvents } from "../modules/CMS/notionGetEvents";
import { EventTicket } from "../../event-client";

export default async function eventTicketRouter(
  fastify: FastifyInstance<
    RawServerDefault,
    RawRequestDefaultExpression,
    RawReplyDefaultExpression
  >
): Promise<void> {
  fastify.get("/event-tickets", async () => {
    const tickets = await getEventTickets();
    return { data: tickets };
  });

  fastify.get<{ Params: { id: string } }>(
    "/event-tickets/:id",
    async (request) => {
      const { id } = request.params;
      const ticket = await getEventTicketById(id);
      if (!ticket) {
        throw new NotFound();
      }
      return { data: ticket };
    }
  );

  fastify.get<{}>("/notion", async () => {
    await notionGetEvents();
  });

  fastify.post<{ Body: EventTicket }>("/event-tickets", async (request) => {
    const events = await notionGetEvents();
    const tickets = [];

    for (const event of events) {
      const ticket = await createEventTicket(event);
      tickets.push(ticket);
    }
    return { data: tickets };
  });

  fastify.put<{ Params: { id: string }; Body: EventTicket }>(
    "/event-tickets/:id",
    async (request) => {
      const { id } = request.params;
      const updatedTicket = await updateEventTicket(id, request.body);
      if (!updatedTicket) {
        throw new NotFound();
      }
      return { data: updatedTicket };
    }
  );

  fastify.delete<{ Params: { id: string } }>(
    "/event-tickets/:id",
    async (request) => {
      const { id } = request.params;
      const deletedTicket = await deleteEventTicket(id);
      if (!deletedTicket) {
        throw new NotFound();
      }
      return { data: deletedTicket };
    }
  );
}
