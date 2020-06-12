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
var team_entity_1 = require("./team.entity");
var Project = /** @class */ (function () {
    function Project() {
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Project.prototype, "project_id", void 0);
    __decorate([
        typeorm_1.Index(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Project.prototype, "name", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return user_entity_1.User; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: 'user_id'
        }),
        __metadata("design:type", user_entity_1.User)
    ], Project.prototype, "user", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.User; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: 'creator_id'
        }),
        __metadata("design:type", user_entity_1.User)
    ], Project.prototype, "creator", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return team_entity_1.Team; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: 'team_id'
        }),
        __metadata("design:type", team_entity_1.Team)
    ], Project.prototype, "team", void 0);
    Project = __decorate([
        typeorm_1.Entity('projects')
    ], Project);
    return Project;
}());
exports.Project = Project;
//# sourceMappingURL=project.entity.js.map