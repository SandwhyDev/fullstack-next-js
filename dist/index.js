"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _helmet = _interopRequireDefault(require("helmet"));

var _UserController = _interopRequireDefault(require("./controller/UserController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var app = (0, _express["default"])();
var PORT = process.env.PORT; // middleware

app.use((0, _cors["default"])());
app.use((0, _helmet["default"])({
  crossOriginResourcePolicy: false
}));
app.use(_express["default"].json({
  limit: "100mb"
}));
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_express["default"]["static"](_path["default"].join(__dirname, "../public"))); //routes

app.use("/api", _UserController["default"]); //listener

app.listen(PORT, "0.0.0.0", function () {
  console.log("\n    LISTENED TO PORT ".concat(PORT, "\n    "));
});