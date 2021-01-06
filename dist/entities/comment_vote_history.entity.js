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
var actions_enum_1 = require("../shared/enums/actions.enum");
var profile_entity_1 = require("./profile.entity");
var comment_entity_1 = require("./comment.entity");
var trackable_link_entity_1 = require("./trackable_link.entity");
var CommentVoteHistory = /** @class */ (function () {
    function CommentVoteHistory() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", String)
    ], CommentVoteHistory.prototype, "comment_vote_history_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return comment_entity_1.Comment; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: "comment_id",
        }),
        __metadata("design:type", comment_entity_1.Comment)
    ], CommentVoteHistory.prototype, "comment", void 0);
    __decorate([
        typeorm_1.Column({
            type: "enum",
            enum: actions_enum_1.CommentVoteActions,
            enumName: "comment_vote_action_enum",
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], CommentVoteHistory.prototype, "action", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return profile_entity_1.Profile; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: "voter_id",
        }),
        __metadata("design:type", profile_entity_1.Profile)
    ], CommentVoteHistory.prototype, "voter", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return profile_entity_1.Profile; }, { nullable: true }),
        typeorm_1.JoinColumn({
            name: "sharing_profile_id",
        }),
        __metadata("design:type", profile_entity_1.Profile)
    ], CommentVoteHistory.prototype, "sharing_profile", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return trackable_link_entity_1.TrackableLink; }, { nullable: true }),
        typeorm_1.JoinColumn({
            name: "trackable_link_id",
        }),
        __metadata("design:type", trackable_link_entity_1.TrackableLink)
    ], CommentVoteHistory.prototype, "trackable_link", void 0);
    __decorate([
        typeorm_1.Column({
            type: "timestamptz",
            default: function () { return "CURRENT_TIMESTAMP"; },
            nullable: false,
        }),
        __metadata("design:type", Date)
    ], CommentVoteHistory.prototype, "created_at", void 0);
    CommentVoteHistory = __decorate([
        typeorm_1.Entity("comment_votes_history")
    ], CommentVoteHistory);
    return CommentVoteHistory;
}());
exports.CommentVoteHistory = CommentVoteHistory;
//# sourceMappingURL=comment_vote_history.entity.js.map