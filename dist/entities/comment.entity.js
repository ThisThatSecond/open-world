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
var poll_entity_1 = require("./poll.entity");
var Comment = /** @class */ (function () {
    function Comment() {
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Comment.prototype, "comment_id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Comment.prototype, "text", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return poll_entity_1.Poll; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: 'poll_id'
        }),
        __metadata("design:type", poll_entity_1.Poll)
    ], Comment.prototype, "poll", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.User; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: 'creator_id'
        }),
        __metadata("design:type", user_entity_1.User)
    ], Comment.prototype, "creator", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Comment.prototype, "is_hidden", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'timestamptz',
            default: function () { return 'CURRENT_TIMESTAMP'; }
        }),
        __metadata("design:type", Date)
    ], Comment.prototype, "created_at", void 0);
    Comment = __decorate([
        typeorm_1.Entity('comments')
    ], Comment);
    return Comment;
}());
exports.Comment = Comment;
//# sourceMappingURL=comment.entity.js.map