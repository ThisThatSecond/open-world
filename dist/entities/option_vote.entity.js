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
var option_entity_1 = require("./option.entity");
var actions_enum_1 = require("../shared/enums/actions.enum");
var OptionVote = /** @class */ (function () {
    function OptionVote() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], OptionVote.prototype, "option_vote_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return option_entity_1.Option; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: 'option_id'
        }),
        __metadata("design:type", option_entity_1.Option)
    ], OptionVote.prototype, "option", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'enum',
            enum: actions_enum_1.OptionVoteActions,
            enumName: 'option_vote_action_enum'
        }),
        __metadata("design:type", Number)
    ], OptionVote.prototype, "action", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.User; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: 'voter_id'
        }),
        __metadata("design:type", user_entity_1.User)
    ], OptionVote.prototype, "voter", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'timestamptz',
            default: function () { return 'CURRENT_TIMESTAMP'; }
        }),
        __metadata("design:type", Object)
    ], OptionVote.prototype, "created_at", void 0);
    OptionVote = __decorate([
        typeorm_1.Entity('option_votes')
    ], OptionVote);
    return OptionVote;
}());
exports.OptionVote = OptionVote;
//# sourceMappingURL=option_vote.entity.js.map