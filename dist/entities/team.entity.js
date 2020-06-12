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
var Team = /** @class */ (function () {
    function Team() {
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Team.prototype, "team_id", void 0);
    __decorate([
        typeorm_1.Index(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Team.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Team.prototype, "join_link", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Team.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true
        }),
        __metadata("design:type", String)
    ], Team.prototype, "avatar_url", void 0);
    __decorate([
        typeorm_1.Column({
            default: 0
        }),
        __metadata("design:type", Number)
    ], Team.prototype, "opinions_count", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.User; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: 'creator_id',
        }),
        __metadata("design:type", user_entity_1.User)
    ], Team.prototype, "creator", void 0);
    __decorate([
        typeorm_1.Column({
            default: true
        }),
        __metadata("design:type", Boolean)
    ], Team.prototype, "is_active", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'timestamptz',
            default: function () { return 'CURRENT_TIMESTAMP'; }
        }),
        __metadata("design:type", Object)
    ], Team.prototype, "created_at", void 0);
    Team = __decorate([
        typeorm_1.Entity('teams')
    ], Team);
    return Team;
}());
exports.Team = Team;
//# sourceMappingURL=team.entity.js.map