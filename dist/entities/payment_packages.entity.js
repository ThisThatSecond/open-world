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
var PaymentPackage = /** @class */ (function () {
    function PaymentPackage() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", String)
    ], PaymentPackage.prototype, "payment_package_id", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false,
            unique: true,
        }),
        __metadata("design:type", String)
    ], PaymentPackage.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false,
            type: "float",
        }),
        __metadata("design:type", Number)
    ], PaymentPackage.prototype, "price", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], PaymentPackage.prototype, "credit", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false,
        }),
        __metadata("design:type", String)
    ], PaymentPackage.prototype, "currency", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", String)
    ], PaymentPackage.prototype, "desc", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], PaymentPackage.prototype, "rank", void 0);
    __decorate([
        typeorm_1.Column({
            default: true,
        }),
        __metadata("design:type", Boolean)
    ], PaymentPackage.prototype, "is_active", void 0);
    __decorate([
        typeorm_1.Column({
            type: "timestamptz",
            default: function () { return "CURRENT_TIMESTAMP"; },
            nullable: false,
        }),
        __metadata("design:type", Date)
    ], PaymentPackage.prototype, "updated_at", void 0);
    PaymentPackage = __decorate([
        typeorm_1.Entity("payment_packages"),
        typeorm_1.Check("check_package_price", "price > 0 and credit > 0")
    ], PaymentPackage);
    return PaymentPackage;
}());
exports.PaymentPackage = PaymentPackage;
//# sourceMappingURL=payment_packages.entity.js.map