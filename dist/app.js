"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const path_1 = __importDefault(require("path"));
const user = __importStar(require("./user"));
const port = 3000;
const app = (0, express_1.default)();
const httpServer = http_1.default.createServer(app);
const public_path = path_1.default.join(__dirname, "../front/dist");
app.use(express_1.default.static(public_path));
const io = new socket_io_1.Server(httpServer, { cors: { origin: '*' } });
io.on("connect", socket => {
    console.log("connect: ", socket.id);
    socket.on("log", (payload) => {
        if (payload.name)
            user.add(user.create(socket.id, payload.name));
    });
    socket.on("error", err => { console.log("error"); });
    socket.on("disconnect", () => {
        console.log("disconnect: ", socket.id);
        user.remove(socket.id);
    });
});
app.get("/", (req, res) => {
    res.sendFile(public_path + "/index.html");
});
httpServer.listen(port, () => console.log("listening on port:", port));
