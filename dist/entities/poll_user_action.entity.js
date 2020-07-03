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
var actions_enum_1 = require("../shared/enums/actions.enum");
var PollUserAction = /** @class */ (function () {
    function PollUserAction() {
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], PollUserAction.prototype, "poll_user_action_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return poll_entity_1.Poll; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: 'poll_id'
        }),
        __metadata("design:type", poll_entity_1.Poll)
    ], PollUserAction.prototype, "poll", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.User; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: 'user_id'
        }),
        __metadata("design:type", user_entity_1.User)
    ], PollUserAction.prototype, "user", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'enum',
            enum: actions_enum_1.PollUserActions,
            nullable: false
        }),
        __metadata("design:type", PollUserAction)
    ], PollUserAction.prototype, "action", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'timestamptz',
            default: function () { return 'CURRENT_TIMESTAMP'; },
            nullable: false
        }),
        __metadata("design:type", Date)
    ], PollUserAction.prototype, "created_at", void 0);
    PollUserAction = __decorate([
        typeorm_1.Entity('poll_user_actions')
    ], PollUserAction);
    return PollUserAction;
}());
exports.PollUserAction = PollUserAction;
//# sourceMappingURL=poll_user_action.entity.js.map