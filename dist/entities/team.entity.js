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
var profile_entity_1 = require("./profile.entity");
var invitation_entity_1 = require("./invitation.entity");
var Team = /** @class */ (function () {
    function Team() {
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Team.prototype, "team_id", void 0);
    __decorate([
        typeorm_1.Index(),
        typeorm_1.Column({
            nullable: false,
        }),
        __metadata("design:type", String)
    ], Team.prototype, "name", void 0);
    __decorate([
        typeorm_1.Index(),
        typeorm_1.Column({
            unique: true,
            nullable: false,
        }),
        __metadata("design:type", String)
    ], Team.prototype, "join_link", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false,
        }),
        __metadata("design:type", String)
    ], Team.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Team.prototype, "avatar_url", void 0);
    __decorate([
        typeorm_1.Column({
            default: 0,
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], Team.prototype, "response_credit", void 0);
    __decorate([
        typeorm_1.Column({
            default: true,
            nullable: false,
        }),
        __metadata("design:type", Boolean)
    ], Team.prototype, "is_active", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.User; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: "owner_id",
        }),
        __metadata("design:type", user_entity_1.User)
    ], Team.prototype, "owner", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return profile_entity_1.Profile; }, function (profile) { return profile.team; }),
        __metadata("design:type", Array)
    ], Team.prototype, "profiles", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return invitation_entity_1.Invitation; }, function (Invitation) { return Invitation.team; }),
        __metadata("design:type", Array)
    ], Team.prototype, "invitations", void 0);
    __decorate([
        typeorm_1.Column({
            type: "timestamptz",
            default: function () { return "CURRENT_TIMESTAMP"; },
            nullable: false,
        }),
        __metadata("design:type", Date)
    ], Team.prototype, "created_at", void 0);
    Team = __decorate([
        typeorm_1.Entity("teams"),
        typeorm_1.Unique("uniqe_join_link", ["join_link"])
    ], Team);
    return Team;
}());
exports.Team = Team;
//# sourceMappingURL=team.entity.js.map