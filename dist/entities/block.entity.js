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
var profile_entity_1 = require("./profile.entity");
var Block = /** @class */ (function () {
    function Block() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", String)
    ], Block.prototype, "block_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return profile_entity_1.Profile; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: "blocker_id",
        }),
        __metadata("design:type", profile_entity_1.Profile)
    ], Block.prototype, "blocker", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return profile_entity_1.Profile; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: "blocking_id",
        }),
        __metadata("design:type", profile_entity_1.Profile)
    ], Block.prototype, "blocking", void 0);
    __decorate([
        typeorm_1.Column({
            type: "timestamptz",
            default: function () { return "CURRENT_TIMESTAMP"; },
            nullable: false,
        }),
        __metadata("design:type", Date)
    ], Block.prototype, "created_at", void 0);
    Block = __decorate([
        typeorm_1.Entity("blocks"),
        typeorm_1.Unique("unique_block", ["blocker", "blocking"])
    ], Block);
    return Block;
}());
exports.Block = Block;
//# sourceMappingURL=block.entity.js.map