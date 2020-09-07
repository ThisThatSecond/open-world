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
var PaymentSetting = /** @class */ (function () {
    function PaymentSetting() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", String)
    ], PaymentSetting.prototype, "payment_setting_id", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false,
            type: 'float'
        }),
        __metadata("design:type", Number)
    ], PaymentSetting.prototype, "base_price", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false,
        }),
        __metadata("design:type", String)
    ], PaymentSetting.prototype, "currency", void 0);
    __decorate([
        typeorm_1.Column({
            type: "timestamptz",
            default: function () { return "CURRENT_TIMESTAMP"; },
            nullable: false,
        }),
        __metadata("design:type", Date)
    ], PaymentSetting.prototype, "updated_at", void 0);
    PaymentSetting = __decorate([
        typeorm_1.Entity("payment_settings"),
        typeorm_1.Check("check_price", "base_price > 0")
    ], PaymentSetting);
    return PaymentSetting;
}());
exports.PaymentSetting = PaymentSetting;
//# sourceMappingURL=payment_setting.entity.js.map