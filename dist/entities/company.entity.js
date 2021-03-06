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
var Company = /** @class */ (function () {
    function Company() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", String)
    ], Company.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ nullable: false }),
        __metadata("design:type", String)
    ], Company.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ default: null }),
        __metadata("design:type", String)
    ], Company.prototype, "website", void 0);
    __decorate([
        typeorm_1.Column({ default: null }),
        __metadata("design:type", String)
    ], Company.prototype, "logo", void 0);
    __decorate([
        typeorm_1.Column({ default: null }),
        __metadata("design:type", String)
    ], Company.prototype, "company_size", void 0);
    __decorate([
        typeorm_1.Column({ default: null }),
        __metadata("design:type", String)
    ], Company.prototype, "company_type", void 0);
    __decorate([
        typeorm_1.Column({ nullable: false }),
        __metadata("design:type", String)
    ], Company.prototype, "email_domain_name", void 0);
    __decorate([
        typeorm_1.Column({ nullable: false }),
        __metadata("design:type", String)
    ], Company.prototype, "owner_id", void 0);
    Company = __decorate([
        typeorm_1.Entity("company")
    ], Company);
    return Company;
}());
exports.Company = Company;
//# sourceMappingURL=company.entity.js.map