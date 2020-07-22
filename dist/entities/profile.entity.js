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
var poll_entity_1 = require("./poll.entity");
var Profile = /** @class */ (function () {
    function Profile() {
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Profile.prototype, "profile_id", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return user_entity_1.User; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: 'user_id'
        }),
        __metadata("design:type", user_entity_1.User)
    ], Profile.prototype, "user", void 0);
    __decorate([
        typeorm_1.Index(),
        typeorm_1.Column({
            nullable: true
        }),
        __metadata("design:type", String)
    ], Profile.prototype, "name", void 0);
    __decorate([
        typeorm_1.Index(),
        typeorm_1.Column({
            nullable: true
        }),
        __metadata("design:type", String)
    ], Profile.prototype, "fullname", void 0);
    __decorate([
        typeorm_1.Column({
            default: 0
        }),
        __metadata("design:type", Number)
    ], Profile.prototype, "activity_badge", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Profile.prototype, "is_verified", void 0);
    __decorate([
        typeorm_1.Column({
            default: true
        }),
        __metadata("design:type", Boolean)
    ], Profile.prototype, "is_active", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Profile.prototype, "is_hidden", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Profile.prototype, "profile_completed", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true
        }),
        __metadata("design:type", String)
    ], Profile.prototype, "bio", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'point',
            nullable: true
        }),
        __metadata("design:type", Object)
    ], Profile.prototype, "geo_point", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true
        }),
        __metadata("design:type", String)
    ], Profile.prototype, "location", void 0);
    __decorate([
        typeorm_1.Column('varchar', {
            array: true,
            default: '{}'
        }),
        __metadata("design:type", Array)
    ], Profile.prototype, "notifications_preferences", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Profile.prototype, "neighborhood_visible", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Profile.prototype, "is_analytics_profile", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true
        }),
        __metadata("design:type", String)
    ], Profile.prototype, "image_url", void 0);
    __decorate([
        typeorm_1.Column('varchar', {
            array: true,
            default: '{}'
        }),
        __metadata("design:type", Array)
    ], Profile.prototype, "sees_polls_from", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.User; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: 'creator_id'
        }),
        __metadata("design:type", user_entity_1.User)
    ], Profile.prototype, "creator", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return team_entity_1.Team; }, function (team) { return team.profiles; }, { nullable: true }),
        typeorm_1.JoinColumn({
            name: 'team_id'
        }),
        __metadata("design:type", team_entity_1.Team)
    ], Profile.prototype, "team", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return poll_entity_1.Poll; }, function (poll) { return poll.profile; }),
        __metadata("design:type", Array)
    ], Profile.prototype, "polls", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'timestamptz',
            default: function () { return 'CURRENT_TIMESTAMP'; },
            nullable: false
        }),
        __metadata("design:type", Date)
    ], Profile.prototype, "created_at", void 0);
    Profile = __decorate([
        typeorm_1.Entity('profiles')
    ], Profile);
    return Profile;
}());
exports.Profile = Profile;
//# sourceMappingURL=profile.entity.js.map