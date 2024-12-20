'use strict'

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

// const path = require('node:path')
// const AutoLoad = require('@fastify/autoload')

import path from "node:path";
import AutoLoad from "@fastify/autoload";

// Pass --options via CLI arguments in command to enable these options.
const options = {}

export default async function (fastify, opts) {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}

// module.exports.options = options

// export default {
//   options: options
// }
