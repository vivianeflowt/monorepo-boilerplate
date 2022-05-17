"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const core_1 = require("@nestjs/core");
const chalk_1 = __importDefault(require("chalk"));
const console_1 = require("console");
const app_module_1 = require("./app.module");
const setup_1 = require("./setup");
const PORT = process.env.PORT || 3000;
const bootstrap = () => __awaiter(void 0, void 0, void 0, function* () {
    return core_1.NestFactory.create(app_module_1.AppModule)
        .then((app) => (0, setup_1.setup)(app))
        .then((app) => __awaiter(void 0, void 0, void 0, function* () {
        yield app.listen(PORT);
        return app;
    }))
        .catch((error) => console.error(error))
        .finally(() => {
        (0, console_1.log)(`\n`, chalk_1.default.cyan('Swagger:'), chalk_1.default.white(`http://localhost:${PORT}/api/swagger \n`));
    });
});
console.clear();
bootstrap();
//# sourceMappingURL=main.js.map