import { FastifySchema } from "fastify";

export const surveySchema: FastifySchema = {
  body: {
    type: "object",
    properties: {
      birthYear: { type: "string" },
      gender: { type: "string" },
      location: { type: "string" },
      newsLetter: { type: "boolean" },
      isPresentLaunchParty: { type: "boolean" },
      email: { type: "string", format: "email" },
    },
    required: ["email"],
  },
  response: {
    200: {
      type: "object",
      properties: {
        success: { type: "boolean" },
      },
    },
  },
};
