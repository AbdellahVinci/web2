"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./routes/users"));
const pizzas_1 = __importDefault(require("./routes/pizzas"));
const drinks_1 = __importDefault(require("./routes/drinks"));
const app = (0, express_1.default)();
app.use((_req, _res, next) => {
    console.log("Time:", new Date().toLocaleString("fr-FR", { timeZone: "Europe/Brussels" }));
    next();
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use("/users", users_1.default);
app.use("/pizzas", pizzas_1.default);
app.use("/drinks", drinks_1.default);
const errorHandler = (err, _req, res, _next) => {
    console.error(err.stack);
    return res.status(500).send("Something broke!");
};
app.use(errorHandler);
exports.default = app;
