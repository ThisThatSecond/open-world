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
var pair_entity_1 = require("./pair.entity");
var actions_enum_1 = require("../shared/enums/actions.enum");
var PairVote = /** @class */ (function () {
    function PairVote() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], PairVote.prototype, "pair_vote_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return pair_entity_1.Pair; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: 'pair_id'
        }),
        __metadata("design:type", pair_entity_1.Pair)
    ], PairVote.prototype, "pair", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'enum',
            enum: actions_enum_1.PairVoteActions,
            enumName: 'pair_vote_action_enum'
        }),
        __metadata("design:type", Number)
    ], PairVote.prototype, "action", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.User; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: 'voter_id'
        }),
        __metadata("design:type", user_entity_1.User)
    ], PairVote.prototype, "voter", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'timestamptz',
            default: function () { return 'CURRENT_TIMESTAMP'; }
        }),
        __metadata("design:type", Date)
    ], PairVote.prototype, "created_at", void 0);
    PairVote = __decorate([
        typeorm_1.Entity('pair_votes')
    ], PairVote);
    return PairVote;
}());
exports.PairVote = PairVote;
//# sourceMappingURL=pair_vote.entity.js.map