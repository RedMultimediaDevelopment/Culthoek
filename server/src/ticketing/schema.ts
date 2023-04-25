export const EventTicketSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    date: { type: "string" },
    time: { type: "string" },
    image: { type: "string" },
    description: { type: "string" },
    price: { type: "number" },
  },
};
