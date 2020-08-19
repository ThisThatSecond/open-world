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
var InvitationLink = /** @class */ (function () {
    function InvitationLink() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", String)
    ], InvitationLink.prototype, "invitation_link_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.User; }, { nullable: true }),
        typeorm_1.JoinColumn({
            name: "user_id",
        }),
        __metadata("design:type", user_entity_1.User)
    ], InvitationLink.prototype, "user", void 0);
    __decorate([
        typeorm_1.Index(),
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", String)
    ], InvitationLink.prototype, "email", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return team_entity_1.Team; }),
        typeorm_1.JoinColumn({
            name: "team_id",
        }),
        __metadata("design:type", team_entity_1.Team)
    ], InvitationLink.prototype, "team", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return profile_entity_1.Profile; }),
        typeorm_1.JoinColumn({
            name: "profile_id",
        }),
        __metadata("design:type", profile_entity_1.Profile)
    ], InvitationLink.prototype, "profile", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", String)
    ], InvitationLink.prototype, "invitation_message", void 0);
    __decorate([
        typeorm_1.Column({
            default: true,
            nullable: false,
        }),
        __metadata("design:type", Boolean)
    ], InvitationLink.prototype, "is_active", void 0);
    __decorate([
        typeorm_1.Column({
            type: "timestamptz",
            default: function () { return "CURRENT_TIMESTAMP"; },
            nullable: false,
        }),
        __metadata("design:type", Date)
    ], InvitationLink.prototype, "created_at", void 0);
    InvitationLink = __decorate([
        typeorm_1.Entity("invitation_link"),
        typeorm_1.Check("check_email_or_user_id", "user_id is not null or email is not null")
    ], InvitationLink);
    return InvitationLink;
}());
exports.InvitationLink = InvitationLink;
//# sourceMappingURL=invitation_link.entity.js.map