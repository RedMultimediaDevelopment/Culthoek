import { PaymentRequestBody } from "./types";

import { FastifyRequest, FastifyReply } from "fastify";
import { paymentService } from "../payment/service";

export const paymentController = {
  async createSession(
    req: FastifyRequest<{ Body: PaymentRequestBody }>,
    res: FastifyReply
  ) {
    const { eventId, amount } = req.body;
    const session = await paymentService.createSession(
      eventId,
      amount
    );

    res.send(session);
  },
};
