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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHistory = exports.Users = exports.SUsers = void 0;
const typeorm_1 = require("typeorm");
let SUsers = class SUsers {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], SUsers.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SUsers.prototype, "password", void 0);
SUsers = __decorate([
    (0, typeorm_1.Entity)()
], SUsers);
exports.SUsers = SUsers;
let Users = class Users {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Users.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "firstname", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "lastname", void 0);
Users = __decorate([
    (0, typeorm_1.Entity)()
], Users);
exports.Users = Users;
let GitHistory = class GitHistory {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], GitHistory.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users, (users) => users.username),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", Users)
], GitHistory.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Date)
], GitHistory.prototype, "datetime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], GitHistory.prototype, "violations", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], GitHistory.prototype, "public_gist", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], GitHistory.prototype, "public_repo", void 0);
GitHistory = __decorate([
    (0, typeorm_1.Entity)()
], GitHistory);
exports.GitHistory = GitHistory;
//# sourceMappingURL=users.entity.js.map