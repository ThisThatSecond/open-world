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
var followership_status_enum_1 = require("../shared/enums/followership_status.enum");
var Collection = /** @class */ (function () {
    function Collection() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", String)
    ], Collection.prototype, "followership_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return profile_entity_1.Profile; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: "follower_id",
        }),
        __metadata("design:type", profile_entity_1.Profile)
    ], Collection.prototype, "follower", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return profile_entity_1.Profile; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: "following_id",
        }),
        __metadata("design:type", profile_entity_1.Profile)
    ], Collection.prototype, "following", void 0);
    __decorate([
        typeorm_1.Column({
            type: "enum",
            enum: followership_status_enum_1.FollowershipStatus,
            nullable: false,
            default: followership_status_enum_1.FollowershipStatus.PENDING,
        }),
        __metadata("design:type", Number)
    ], Collection.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column({
            type: "timestamptz",
            default: function () { return "CURRENT_TIMESTAMP"; },
            nullable: false,
        }),
        __metadata("design:type", Date)
    ], Collection.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.Column({
            type: "timestamptz",
            default: function () { return "CURRENT_TIMESTAMP"; },
            nullable: false,
        }),
        __metadata("design:type", Date)
    ], Collection.prototype, "updated_at", void 0);
    Collection = __decorate([
        typeorm_1.Entity("followerships"),
        typeorm_1.Unique("unique_follwership", ["follower", "following"])
    ], Collection);
    return Collection;
}());
exports.Collection = Collection;
//# sourceMappingURL=followership.entity.js.map