"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    enviroment: process.env.NODE_ENV,
    name: process.env.npm_package_name,
    description: process.env.npm_package_description,
    version: process.env.npm_package_version,
    port: parseInt(process.env.PORT || '3000', 10),
});
//# sourceMappingURL=config.js.map