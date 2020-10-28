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
var option_vote_entity_1 = require("./option_vote.entity");
var Option = /** @class */ (function () {
    function Option() {
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Option.prototype, "option_id", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false,
        }),
        __metadata("design:type", String)
    ], Option.prototype, "title", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Option.prototype, "image_url", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Option.prototype, "video_url", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", Boolean)
    ], Option.prototype, "is_this", void 0);
    __decorate([
        typeorm_1.Column({
            default: 0,
        }),
        __metadata("design:type", Number)
    ], Option.prototype, "upvotes_count", void 0);
    __decorate([
        typeorm_1.Column({
            default: 0,
        }),
        __metadata("design:type", Number)
    ], Option.prototype, "downvotes_count", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return option_vote_entity_1.OptionVote; }, function (optionVote) { return optionVote.option; }),
        __metadata("design:type", Array)
    ], Option.prototype, "optionVotes", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return poll_entity_1.Poll; }, function (poll) { return poll.options; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: "poll_id",
        }),
        __metadata("design:type", poll_entity_1.Poll)
    ], Option.prototype, "poll", void 0);
    Option = __decorate([
        typeorm_1.Entity("options")
    ], Option);
    return Option;
}());
exports.Option = Option;
//# sourceMappingURL=option.entity.js.map