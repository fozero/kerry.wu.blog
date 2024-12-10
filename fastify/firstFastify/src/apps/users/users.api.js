import knex from "../../db/knex.js";
import { User } from "./users.model.js";

const getUsers = async (request, reply) => {
  const res = await User.query()
  reply.send({ users: res });
};

export default {
  getUsers,
};
