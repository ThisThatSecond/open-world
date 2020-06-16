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
var profile_entity_1 = require("./profile.entity");
var analytics_roles_enum_1 = require("../shared/enums/analytics_roles.enum");
var Membership = /** @class */ (function () {
    function Membership() {
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Membership.prototype, "membership_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.User; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: 'inviter_id'
        }),
        __metadata("design:type", user_entity_1.User)
    ], Membership.prototype, "inviter", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.User; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: 'invitee_id'
        }),
        __metadata("design:type", user_entity_1.User)
    ], Membership.prototype, "invitee", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return team_entity_1.Team; }),
        typeorm_1.JoinColumn({
            name: 'team_id',
        }),
        __metadata("design:type", team_entity_1.Team)
    ], Membership.prototype, "team", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return profile_entity_1.Profile; }),
        typeorm_1.JoinColumn({
            name: 'profile_id',
        }),
        __metadata("design:type", profile_entity_1.Profile)
    ], Membership.prototype, "project", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Membership.prototype, "invitation_message", void 0);
    __decorate([
        typeorm_1.Column({
            default: true
        }),
        __metadata("design:type", Boolean)
    ], Membership.prototype, "is_pending", void 0);
    __decorate([
        typeorm_1.Column({
            type: "enum",
            enum: analytics_roles_enum_1.AnalyticsRoles,
            nullable: false
        }),
        __metadata("design:type", Number)
    ], Membership.prototype, "role", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Membership.prototype, "is_active", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Membership.prototype, "send_email_required", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'timestamptz',
            default: function () { return 'CURRENT_TIMESTAMP'; }
        }),
        __metadata("design:type", Date)
    ], Membership.prototype, "created_at", void 0);
    Membership = __decorate([
        typeorm_1.Entity('memberships')
    ], Membership);
    return Membership;
}());
exports.Membership = Membership;
//# sourceMappingURL=membership.entity.js.map