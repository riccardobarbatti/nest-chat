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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const pusher_service_1 = require("./pusher/pusher.service");
let AppController = class AppController {
    constructor(pusherService) {
        this.pusherService = pusherService;
    }
    async messages(username, message) {
        await this.pusherService.trigger("chat", "message", {
            username,
            message
        });
        return [];
    }
    getMessage() {
        console.log("Hello NestJS!!");
    }
};
__decorate([
    (0, common_1.Post)("messages"),
    __param(0, (0, common_1.Body)('username')),
    __param(1, (0, common_1.Body)('message')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "messages", null);
__decorate([
    (0, common_1.Get)("hello"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getMessage", null);
AppController = __decorate([
    (0, common_1.Controller)("api/v1"),
    __metadata("design:paramtypes", [pusher_service_1.PusherService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map