import { EventTicket, PrismaClient } from "../../event-client/index";

const prisma = new PrismaClient();

export async function createEventTicket(
  ticketData: EventTicket
): Promise<EventTicket> {
  const newTicket = await prisma.eventTicket.create({
    data: {
      id: ticketData.id,
      name: ticketData.name,
      price: ticketData.price,
      time: ticketData.time,
      date: ticketData.date,
      image: ticketData.image,
      description: ticketData.description,
    },
  });
  return newTicket;
}

export async function getEventTickets(): Promise<EventTicket[]> {
  const tickets = await prisma.eventTicket.findMany();
  return tickets;
}

export async function getEventTicketById(
  id: string
): Promise<EventTicket | null> {
  const ticket = await prisma.eventTicket.findUnique({ where: { id } });
  return ticket;
}

export async function updateEventTicket(
  id: string,
  ticketData: EventTicket
): Promise<EventTicket | null> {
  const updatedTicket = await prisma.eventTicket.update({
    where: { id },
    data: {
      price: ticketData.price,
      time: ticketData.time,
      date: ticketData.date,
      image: ticketData.image,
      description: ticketData.description,
    },
  });
  return updatedTicket;
}

export async function deleteEventTicket(
  id: string
): Promise<EventTicket | null> {
  const deletedTicket = await prisma.eventTicket.delete({ where: { id } });
  return deletedTicket;
}
