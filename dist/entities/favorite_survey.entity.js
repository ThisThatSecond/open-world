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
var FavoriteSurveys = /** @class */ (function () {
    function FavoriteSurveys() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", String)
    ], FavoriteSurveys.prototype, "favorite_id", void 0);
    __decorate([
        typeorm_1.Column({
            name: "user_id",
        }),
        __metadata("design:type", String)
    ], FavoriteSurveys.prototype, "user_id", void 0);
    __decorate([
        typeorm_1.Column({
            name: "survey_id",
        }),
        __metadata("design:type", String)
    ], FavoriteSurveys.prototype, "survey_id", void 0);
    __decorate([
        typeorm_1.Column({
            type: "timestamptz",
            default: function () { return "CURRENT_TIMESTAMP"; },
            nullable: false,
        }),
        __metadata("design:type", Date)
    ], FavoriteSurveys.prototype, "created_at", void 0);
    FavoriteSurveys = __decorate([
        typeorm_1.Entity("favorite_surveys")
    ], FavoriteSurveys);
    return FavoriteSurveys;
}());
exports.FavoriteSurveys = FavoriteSurveys;
//# sourceMappingURL=favorite_survey.entity.js.map