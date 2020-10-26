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
var user_entity_1 = require("./user.entity");
var team_entity_1 = require("./team.entity");
var payment_setting_entity_1 = require("./payment_setting.entity");
var payment_packages_entity_1 = require("./payment_packages.entity");
var payment_discounts_entity_1 = require("./payment_discounts.entity");
var Payment = /** @class */ (function () {
    function Payment() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", String)
    ], Payment.prototype, "payment_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.User; }, { nullable: true }),
        typeorm_1.JoinColumn({
            name: "payer_id",
        }),
        __metadata("design:type", user_entity_1.User)
    ], Payment.prototype, "payer", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return team_entity_1.Team; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: "team_id",
        }),
        __metadata("design:type", team_entity_1.Team)
    ], Payment.prototype, "team", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return payment_setting_entity_1.PaymentSetting; }, { nullable: true }),
        typeorm_1.JoinColumn({
            name: "payment_setting_id",
        }),
        __metadata("design:type", payment_setting_entity_1.PaymentSetting)
    ], Payment.prototype, "payment_setting", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return payment_packages_entity_1.PaymentPackage; }, { nullable: true }),
        typeorm_1.JoinColumn({
            name: "payment_package_id",
        }),
        __metadata("design:type", payment_packages_entity_1.PaymentPackage)
    ], Payment.prototype, "payment_package", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return payment_discounts_entity_1.PaymentDiscount; }, { nullable: true }),
        typeorm_1.JoinColumn({
            name: "payment_discount_id",
        }),
        __metadata("design:type", payment_discounts_entity_1.PaymentDiscount)
    ], Payment.prototype, "payment_discount", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false,
            unique: true,
        }),
        __metadata("design:type", String)
    ], Payment.prototype, "stripe_session_id", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", Number)
    ], Payment.prototype, "response_credit", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false,
            default: false,
        }),
        __metadata("design:type", Boolean)
    ], Payment.prototype, "is_complete", void 0);
    __decorate([
        typeorm_1.Column({
            type: "jsonb",
            array: false,
            nullable: true,
        }),
        __metadata("design:type", Object)
    ], Payment.prototype, "vat_info", void 0);
    __decorate([
        typeorm_1.Column({
            type: "jsonb",
            array: false,
            nullable: true,
        }),
        __metadata("design:type", Object)
    ], Payment.prototype, "desc", void 0);
    __decorate([
        typeorm_1.Column({
            type: "timestamptz",
            default: function () { return "CURRENT_TIMESTAMP"; },
            nullable: false,
        }),
        __metadata("design:type", Date)
    ], Payment.prototype, "created_at", void 0);
    Payment = __decorate([
        typeorm_1.Entity("payments"),
        typeorm_1.Check("check_completed_payment", "not is_complete or \"desc\" is not null"),
        typeorm_1.Check("check_opinions_count", "(response_credit is null and payment_package_id is not null) or response_credit > 0"),
        typeorm_1.Check("check_setting_or_package", "(payment_setting_id is not null and payment_package_id is null) or (payment_setting_id is null and payment_package_id is not null)")
    ], Payment);
    return Payment;
}());
exports.Payment = Payment;
//# sourceMappingURL=payment.entity.js.map