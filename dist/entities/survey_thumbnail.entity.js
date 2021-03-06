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
var survey_entity_1 = require("./survey.entity");
var SurveyThumbnail = /** @class */ (function () {
    function SurveyThumbnail() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", Object)
    ], SurveyThumbnail.prototype, "survey_thumbnail_id", void 0);
    __decorate([
        typeorm_1.Index(),
        typeorm_1.ManyToOne(function () { return survey_entity_1.Survey; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: "survey_id",
        }),
        __metadata("design:type", survey_entity_1.Survey)
    ], SurveyThumbnail.prototype, "survey", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false,
        }),
        __metadata("design:type", String)
    ], SurveyThumbnail.prototype, "thumbnail_url", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false,
            default: false,
        }),
        __metadata("design:type", Boolean)
    ], SurveyThumbnail.prototype, "is_default", void 0);
    __decorate([
        typeorm_1.Column({
            type: "timestamptz",
            default: function () { return "CURRENT_TIMESTAMP"; },
            nullable: false,
        }),
        __metadata("design:type", Date)
    ], SurveyThumbnail.prototype, "created_at", void 0);
    SurveyThumbnail = __decorate([
        typeorm_1.Entity("survey_thumbnails"),
        typeorm_1.Unique("unique_survey_default_thumbnail", ["survey", "thumbnail_url", "is_default"])
    ], SurveyThumbnail);
    return SurveyThumbnail;
}());
exports.SurveyThumbnail = SurveyThumbnail;
//# sourceMappingURL=survey_thumbnail.entity.js.map