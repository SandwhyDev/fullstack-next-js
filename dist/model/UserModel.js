"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _client = require("@prisma/client");

var UserModel = new _client.PrismaClient().users;
var _default = UserModel;
exports["default"] = _default;