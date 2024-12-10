"use strict";
import knex from "../db/knex.js";
import users from "../apps/users/users.api.js";

const testOpts1 = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          hello: { type: "string" },
          test: { type: "boolean" },
        },
      },
    },
  },
  preHandler: async (request, reply) => {
    console.log("🚀 ~ preHandler: ~ request");
  },
};

const testOpts2 = {
  schema: {
    params: {
      type: "object",
      properties: {
        id: { type: "number" },
      },
    },
    query: {
      type: "object",
      properties: {
        name: { type: "string" },
      },
      required: ["name"],
    },
    response: {
      200: {
        type: "object",
        properties: {
          hello: { type: "string" },
          test: { type: "boolean" },
          id: { type: "number" },
          name: { type: "string" },
        },
      },
    },
  },
  preHandler: async (request, reply) => {
    console.log("🚀 ~ preHandler: ~ request");
  },
};

export default async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    return { root: true, hello: "world" };
  }),
    fastify.get("/test", testOpts1, (request, reply) => {
      reply.send({ hello: "world11", test: false });
    }),
    fastify.get("/test/:id", testOpts2, (request, reply) => {
      const { id } = request.params;
      const { name } = request.query;
      reply.send({ hello: "world11", test: false, id: id, name });
    });

  // add
  fastify.post("/users", async (request, reply) => {
    const { id, name, age } = request.body;
    await knex("users").insert({ id, name, age });
    const res = await knex.select("*").from("users");
    reply.send({ users: res });
  });

  // delete
  fastify.delete("/users/:id", async (request, reply) => {
    const { id } = request.params;
    console.log("🚀 ~ fastify.delete ~ id:", id);
    await knex("users").where("id", id).del();
    const res = await knex.select("*").from("users");
    reply.send({ users: res });
  });

  // update
  fastify.put("/users/:id", async (request, reply) => {
    const { id } = request.params;
    const { name, age } = request.body;
    await knex("users").where("id", id).update({ name, age });
    const res = await knex.select("*").from("users");
    reply.send({ users: res });
  });

  // select
  // fastify.get("/users", async (request, reply) => {
  //   const res = await knex.select("*").from("users");
  //   reply.send({ users: res });
  // });

  fastify.get("/users", users.getUsers);

  // find by id
  fastify.get("/users/:id", async (request, reply) => {
    const { id } = request.params;
    const res = await knex.select("*").from("users").where("id", id);
    reply.send({ user: res });
  });
}
