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
var genders_enum_1 = require("../shared/enums/genders.enum");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], User.prototype, "user_id", void 0);
    __decorate([
        typeorm_1.Index(),
        typeorm_1.Column({
            unique: true,
            nullable: true,
        }),
        __metadata("design:type", String)
    ], User.prototype, "username", void 0);
    __decorate([
        typeorm_1.Index(),
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        typeorm_1.Index(),
        typeorm_1.Column({
            nullable: true
        }),
        __metadata("design:type", String)
    ], User.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true
        }),
        __metadata("design:type", String)
    ], User.prototype, "firstname", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true
        }),
        __metadata("design:type", String)
    ], User.prototype, "surname", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true
        }),
        __metadata("design:type", String)
    ], User.prototype, "profile_image_url", void 0);
    __decorate([
        typeorm_1.Column({
            type: "date",
            nullable: true
        }),
        __metadata("design:type", Date)
    ], User.prototype, "birthday", void 0);
    __decorate([
        typeorm_1.Column({
            type: "enum",
            enum: genders_enum_1.Genders,
            nullable: true
        }),
        __metadata("design:type", String)
    ], User.prototype, "gender", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true
        }),
        __metadata("design:type", String)
    ], User.prototype, "bio", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true
        }),
        __metadata("design:type", String)
    ], User.prototype, "neighborhood", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], User.prototype, "neighborhood_visible", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true
        }),
        __metadata("design:type", String)
    ], User.prototype, "education", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true
        }),
        __metadata("design:type", String)
    ], User.prototype, "language", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'point',
            nullable: true
        }),
        __metadata("design:type", String)
    ], User.prototype, "location", void 0);
    __decorate([
        typeorm_1.Column('varchar', {
            array: true,
            default: '{}'
        }),
        __metadata("design:type", Array)
    ], User.prototype, "notifications_preferences", void 0);
    __decorate([
        typeorm_1.Column('varchar', {
            array: true,
            default: '{}'
        }),
        __metadata("design:type", Array)
    ], User.prototype, "sees_polls_from", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true
        }),
        __metadata("design:type", String)
    ], User.prototype, "fcm_token", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true
        }),
        __metadata("design:type", String)
    ], User.prototype, "installed_version", void 0);
    __decorate([
        typeorm_1.Column({
            default: 0
        }),
        __metadata("design:type", Number)
    ], User.prototype, "activity_badge", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], User.prototype, "profile_completed", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], User.prototype, "is_analytics_user", void 0);
    __decorate([
        typeorm_1.Column({
            default: true
        }),
        __metadata("design:type", Boolean)
    ], User.prototype, "is_active", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'timestamptz',
            nullable: true,
        }),
        __metadata("design:type", Date)
    ], User.prototype, "last_opened_analytics", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'timestamptz',
            nullable: true,
        }),
        __metadata("design:type", Date)
    ], User.prototype, "last_opened_app", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'timestamptz',
            nullable: true,
        }),
        __metadata("design:type", Date)
    ], User.prototype, "last_checked_activity", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'timestamptz',
            default: function () { return 'CURRENT_TIMESTAMP'; }
        }),
        __metadata("design:type", Date)
    ], User.prototype, "created_at", void 0);
    User = __decorate([
        typeorm_1.Entity('users')
    ], User);
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.entity.js.map