"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const express_1 = require("express");
let AppController = exports.AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello(req) {
        console.log(req.params.id);
        if (req.params.id == "true") {
            return {
                url: '/redirect',
                statusCode: 200
            };
        }
        else if (req.params.id == 'false') {
            return {
                url: '/redirect-false',
                statusCode: 200
            };
        }
    }
    redirest() {
        return 'Working ';
    }
    redirectFalse() {
        return 'Working ';
    }
};
__decorate([
    (0, common_1.Get)('/:id'),
    (0, common_1.Redirect)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('/redirect'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "redirest", null);
__decorate([
    (0, common_1.Get)('/redirect-false'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "redirectFalse", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map