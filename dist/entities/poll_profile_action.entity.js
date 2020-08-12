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
var profile_entity_1 = require("./profile.entity");
var actions_enum_1 = require("../shared/enums/actions.enum");
var PollProfileAction = /** @class */ (function () {
    function PollProfileAction() {
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], PollProfileAction.prototype, "poll_profile_action_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return poll_entity_1.Poll; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: "poll_id",
        }),
        __metadata("design:type", poll_entity_1.Poll)
    ], PollProfileAction.prototype, "poll", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.User; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: "profile_id",
        }),
        __metadata("design:type", profile_entity_1.Profile)
    ], PollProfileAction.prototype, "profile", void 0);
    __decorate([
        typeorm_1.Column({
            type: "enum",
            enum: actions_enum_1.PollProfileActions,
            enumName: 'poll_profile_action_enum',
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], PollProfileAction.prototype, "action", void 0);
    __decorate([
        typeorm_1.Column({
            type: "timestamptz",
            default: function () { return "CURRENT_TIMESTAMP"; },
            nullable: false,
        }),
        __metadata("design:type", Date)
    ], PollProfileAction.prototype, "created_at", void 0);
    PollProfileAction = __decorate([
        typeorm_1.Entity("poll_profile_actions"),
        typeorm_1.Unique("uniqe_poll_voter", ["poll", "profile"])
    ], PollProfileAction);
    return PollProfileAction;
}());
exports.PollProfileAction = PollProfileAction;
//# sourceMappingURL=poll_profile_action.entity.js.map