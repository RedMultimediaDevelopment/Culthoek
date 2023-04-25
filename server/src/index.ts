import { createMicroService, logger } from "@kadima-tech/micro-service-base";
import fastify from "fastify";

import surveyRouter from "./survey/router";
import eventTicketRouter from "./ticketing/router";

const app = fastify({ logger: true });

app.register(surveyRouter, eventTicketRouter);

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
