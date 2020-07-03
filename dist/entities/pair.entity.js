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
var option_entity_1 = require("./option.entity");
var Pair = /** @class */ (function () {
    function Pair() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Pair.prototype, "pair_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return poll_entity_1.Poll; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: 'poll_id'
        }),
        __metadata("design:type", poll_entity_1.Poll)
    ], Pair.prototype, "poll", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return option_entity_1.Option; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: 'option1_id'
        }),
        __metadata("design:type", option_entity_1.Option)
    ], Pair.prototype, "option1", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return option_entity_1.Option; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: 'option2_id'
        }),
        __metadata("design:type", option_entity_1.Option)
    ], Pair.prototype, "option2", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'timestamptz',
            default: function () { return 'CURRENT_TIMESTAMP'; },
            nullable: false
        }),
        __metadata("design:type", Date)
    ], Pair.prototype, "created_at", void 0);
    Pair = __decorate([
        typeorm_1.Entity('pairs'),
        typeorm_1.Unique(['option1', 'option2'])
    ], Pair);
    return Pair;
}());
exports.Pair = Pair;
//# sourceMappingURL=pair.entity.js.map