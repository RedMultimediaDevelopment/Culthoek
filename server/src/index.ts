import { createMicroService, logger } from "@kadima-tech/micro-service-base";
import fastify from "fastify";

import surveyRouter from "./survey/router";
import eventTicketRouter from "./ticketing/router";
import paymentRouter from "./modules/payment/router";
import cors from "@fastify/cors";

const app = fastify({ logger: true });

app.register(surveyRouter, eventTicketRouter);
app.register(paymentRouter);

// Register the cors plugin
app.register(cors, {
  origin: "http://localhost:3000",
});

const setup = async () => {
  try {
    const { port } = await createMicroService({
      title: "Cultuurhoek Service",
      routes: [],
      autoDetectHostname: true,
    });

    await app.listen(port, "::");
    logger.info(`server listening on ${app.server.address()}`);
  } catch (e) {
    logger.error("Failed to start service because of error: ", e);
    logger.error(e as Error);
  }
};

setup();
