export const paymentSchema = {
    body: {
      type: 'object',
      properties: {
        eventId: { type: 'string' },
        amount: { type: 'integer' },
      },
      required: ['eventId', 'amount'],
    },
  };