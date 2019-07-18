"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const UserRouter = require("./routes/user.routes");
mongoose_1.default.connect("mongodb://localhost:27017/local_db", {
    useNewUrlParser: true,
});
const app = express_1.default();
app.use(body_parser_1.default.json());
app.use("/users", UserRouter);
app.get("/*", (req, res) => {
    res.json({ message: "Hello World" });
});
app.listen(3000, () => {
    // tslint:disable-next-line:no-console
    console.log("Example app listening on port 3000!");
});
