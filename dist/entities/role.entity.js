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
var typeorm_1 = require("typeorm");
var access_entity_1 = require("./access.entity");
var Role = /** @class */ (function () {
    function Role() {
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", Number)
    ], Role.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "name" }),
        __metadata("design:type", String)
    ], Role.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({
            name: "created_at",
            type: "timestamptz",
            default: function () { return "CURRENT_TIMESTAMP"; },
            nullable: false,
        }),
        __metadata("design:type", Date)
    ], Role.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return access_entity_1.Access; }),
        typeorm_1.JoinColumn({
            name: "role_id",
        }),
        __metadata("design:type", access_entity_1.Access)
    ], Role.prototype, "access", void 0);
    Role = __decorate([
        typeorm_1.Entity("roles")
    ], Role);
    return Role;
}());
exports.Role = Role;
//# sourceMappingURL=role.entity.js.map