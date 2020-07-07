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
var profile_entity_1 = require("./profile.entity");
var user_entity_1 = require("./user.entity");
var poll_entity_1 = require("./poll.entity");
var Collection = /** @class */ (function () {
    function Collection() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", String)
    ], Collection.prototype, "collection_id", void 0);
    __decorate([
        typeorm_1.Index(),
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Collection.prototype, "title", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], Collection.prototype, "visibile_options_count", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], Collection.prototype, "desired_votes_count", void 0);
    __decorate([
        typeorm_1.Column({
            type: "timestamptz",
            nullable: true,
        }),
        __metadata("design:type", Date)
    ], Collection.prototype, "release_date", void 0);
    __decorate([
        typeorm_1.Column({
            default: true,
            nullable: false,
        }),
        __metadata("design:type", Boolean)
    ], Collection.prototype, "is_draft", void 0);
    __decorate([
        typeorm_1.Column({
            default: true,
            nullable: false,
        }),
        __metadata("design:type", Boolean)
    ], Collection.prototype, "is_active", void 0);
    __decorate([
        typeorm_1.Column({
            default: false,
            nullable: false,
        }),
        __metadata("design:type", Boolean)
    ], Collection.prototype, "is_private", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false,
            default: false,
        }),
        __metadata("design:type", Boolean)
    ], Collection.prototype, "is_familiarity_required", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return poll_entity_1.Poll; }, function (poll) { return poll.collection; }),
        __metadata("design:type", Array)
    ], Collection.prototype, "polls", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return profile_entity_1.Profile; }, function (profile) { return profile.polls; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: "profile_id",
        }),
        __metadata("design:type", profile_entity_1.Profile)
    ], Collection.prototype, "profile", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.User; }, function (user) { return user.polls; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: "creator_id",
        }),
        __metadata("design:type", user_entity_1.User)
    ], Collection.prototype, "creator", void 0);
    __decorate([
        typeorm_1.Column({
            type: "timestamptz",
            default: function () { return "CURRENT_TIMESTAMP"; },
            nullable: false,
        }),
        __metadata("design:type", Date)
    ], Collection.prototype, "created_at", void 0);
    Collection = __decorate([
        typeorm_1.Entity("collections"),
        typeorm_1.Check("check_requirements", "\n        not is_draft and \n        title is not null and\n        visibile_options_count >= 3\n        desired_votes_count > 0  \n    ")
    ], Collection);
    return Collection;
}());
exports.Collection = Collection;
//# sourceMappingURL=collection.entity.js.map