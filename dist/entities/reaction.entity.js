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
var reactions_enum_1 = require("../shared/enums/reactions.enum");
var Reaction = /** @class */ (function () {
    function Reaction() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", String)
    ], Reaction.prototype, "reaction_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return profile_entity_1.Profile; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: "profile_id",
        }),
        __metadata("design:type", profile_entity_1.Profile)
    ], Reaction.prototype, "profile", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return poll_entity_1.Poll; }, { nullable: true }),
        typeorm_1.JoinColumn({
            name: "poll_id",
        }),
        __metadata("design:type", poll_entity_1.Poll)
    ], Reaction.prototype, "poll", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return poll_entity_1.Poll; }, { nullable: true }),
        typeorm_1.JoinColumn({
            name: "collection_id",
        }),
        __metadata("design:type", collection_entity_1.Collection)
    ], Reaction.prototype, "collection", void 0);
    __decorate([
        typeorm_1.Column({
            type: "enum",
            enum: reactions_enum_1.Reactions,
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], Reaction.prototype, "reaction", void 0);
    __decorate([
        typeorm_1.Column({
            type: "timestamptz",
            default: function () { return "CURRENT_TIMESTAMP"; },
            nullable: false,
        }),
        __metadata("design:type", Date)
    ], Reaction.prototype, "created_at", void 0);
    Reaction = __decorate([
        typeorm_1.Entity("ractions"),
        typeorm_1.Check("check_poll_or_collection_reaction", "poll_id is not null or collection_id is not null")
    ], Reaction);
    return Reaction;
}());
exports.Reaction = Reaction;
//# sourceMappingURL=reaction.entity.js.map