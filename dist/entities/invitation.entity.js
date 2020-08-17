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
var invitation_types_enum_1 = require("../shared/enums/invitation_types.enum");
var invitation_status_enum_1 = require("../shared/enums/invitation_status.enum");
var Invitation = /** @class */ (function () {
    function Invitation() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Invitation.prototype, "invitation_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.User; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: 'inviter_id'
        }),
        __metadata("design:type", user_entity_1.User)
    ], Invitation.prototype, "inviter", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.User; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: 'invitee_id'
        }),
        __metadata("design:type", user_entity_1.User)
    ], Invitation.prototype, "invitee", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return team_entity_1.Team; }),
        typeorm_1.JoinColumn({
            name: 'team_id',
        }),
        __metadata("design:type", team_entity_1.Team)
    ], Invitation.prototype, "team", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return profile_entity_1.Profile; }),
        typeorm_1.JoinColumn({
            name: 'profile_id',
        }),
        __metadata("design:type", profile_entity_1.Profile)
    ], Invitation.prototype, "profile", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Invitation.prototype, "invitation_message", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'enum',
            enum: invitation_status_enum_1.InvitationStatus,
            nullable: false,
            default: invitation_status_enum_1.InvitationStatus.PENDING
        }),
        __metadata("design:type", Number)
    ], Invitation.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column({
            type: "enum",
            enum: invitation_types_enum_1.InvitationTypes,
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], Invitation.prototype, "type", void 0);
    __decorate([
        typeorm_1.Column({
            default: true,
            nullable: false
        }),
        __metadata("design:type", Boolean)
    ], Invitation.prototype, "is_active", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'timestamptz',
            default: function () { return 'CURRENT_TIMESTAMP'; },
            nullable: false
        }),
        __metadata("design:type", Date)
    ], Invitation.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'timestamptz',
        }),
        __metadata("design:type", Date)
    ], Invitation.prototype, "updated_at", void 0);
    Invitation = __decorate([
        typeorm_1.Entity('invitations'),
        typeorm_1.Check("check_profile_or_team_invitation", "profile_id is not null or team_id is not null")
    ], Invitation);
    return Invitation;
}());
exports.Invitation = Invitation;
//# sourceMappingURL=invitation.entity.js.map