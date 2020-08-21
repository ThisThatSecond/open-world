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
var poll_entity_1 = require("./poll.entity");
var collection_entity_1 = require("./collection.entity");
var profile_entity_1 = require("./profile.entity");
var Share = /** @class */ (function () {
    function Share() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", String)
    ], Share.prototype, "share_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return profile_entity_1.Profile; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: "profile_id",
        }),
        __metadata("design:type", profile_entity_1.Profile)
    ], Share.prototype, "sharingProfile", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return poll_entity_1.Poll; }, { nullable: true }),
        typeorm_1.JoinColumn({
            name: "poll_id",
        }),
        __metadata("design:type", poll_entity_1.Poll)
    ], Share.prototype, "poll", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return collection_entity_1.Collection; }, { nullable: true }),
        typeorm_1.JoinColumn({
            name: "collection_id",
        }),
        __metadata("design:type", collection_entity_1.Collection)
    ], Share.prototype, "collection", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return collection_entity_1.Collection; }, { nullable: true }),
        typeorm_1.JoinColumn({
            name: "profile_id",
        }),
        __metadata("design:type", profile_entity_1.Profile)
    ], Share.prototype, "profile", void 0);
    __decorate([
        typeorm_1.Column({
            type: "timestamptz",
            default: function () { return "CURRENT_TIMESTAMP"; },
            nullable: false,
        }),
        __metadata("design:type", Date)
    ], Share.prototype, "created_at", void 0);
    Share = __decorate([
        typeorm_1.Entity("shares"),
        typeorm_1.Check("check_poll_or_collection_share", "poll_id is not null or collection_id is not null or profile_id is not null")
    ], Share);
    return Share;
}());
exports.Share = Share;
//# sourceMappingURL=share.entity.js.map