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
var option_entity_1 = require("./option.entity");
var pair_entity_1 = require("./pair.entity");
var survey_entity_1 = require("./survey.entity");
var poll_types_enum_1 = require("../shared/enums/poll_types.enum");
var selection_types_enum_1 = require("../shared/enums/selection_types.enum");
var lift_type_enum_1 = require("../shared/enums/lift_type.enum");
var Poll = /** @class */ (function () {
    function Poll() {
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Poll.prototype, "poll_id", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Poll.prototype, "question", void 0);
    __decorate([
        typeorm_1.Column({
            type: "enum",
            enum: poll_types_enum_1.PollTypes,
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], Poll.prototype, "type", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", Number)
    ], Poll.prototype, "visible_options_count", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", Boolean)
    ], Poll.prototype, "is_familiarity_required", void 0);
    __decorate([
        typeorm_1.Column({
            type: "enum",
            enum: selection_types_enum_1.SelectionTypes,
            nullable: true,
        }),
        __metadata("design:type", Number)
    ], Poll.prototype, "selection_type", void 0);
    __decorate([
        typeorm_1.Column({
            type: "enum",
            enum: selection_types_enum_1.MultiSelectionTypes,
            nullable: true,
        }),
        __metadata("design:type", Number)
    ], Poll.prototype, "multi_selection_type", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", Number)
    ], Poll.prototype, "multi_selection_count", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false,
            default: 0
        }),
        __metadata("design:type", Number)
    ], Poll.prototype, "position", void 0);
    __decorate([
        typeorm_1.Column({
            default: 0,
        }),
        __metadata("design:type", Number)
    ], Poll.prototype, "votes_count", void 0);
    __decorate([
        typeorm_1.Column({
            default: 0,
        }),
        __metadata("design:type", Number)
    ], Poll.prototype, "responses_count", void 0);
    __decorate([
        typeorm_1.Column({
            default: 0,
        }),
        __metadata("design:type", Number)
    ], Poll.prototype, "comments_count", void 0);
    __decorate([
        typeorm_1.Index(),
        typeorm_1.OneToOne(function () { return survey_entity_1.Survey; }, function (survey) { return survey.polls; }, {
            nullable: false,
        }),
        typeorm_1.JoinColumn({
            name: "survey_id",
        }),
        __metadata("design:type", survey_entity_1.Survey)
    ], Poll.prototype, "survey", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return option_entity_1.Option; }, function (option) { return option.poll; }),
        __metadata("design:type", Array)
    ], Poll.prototype, "options", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return pair_entity_1.Pair; }, function (pair) { return pair.poll; }),
        __metadata("design:type", Array)
    ], Poll.prototype, "pairs", void 0);
    __decorate([
        typeorm_1.Column({
            default: true,
        }),
        __metadata("design:type", Boolean)
    ], Poll.prototype, "shuffle_options", void 0);
    __decorate([
        typeorm_1.Column('int'),
        __metadata("design:type", Number)
    ], Poll.prototype, "lift_type", void 0);
    __decorate([
        typeorm_1.Column({
            default: null,
        }),
        __metadata("design:type", String)
    ], Poll.prototype, "lift_selected_option_id", void 0);
    Poll = __decorate([
        typeorm_1.Entity("polls"),
        typeorm_1.Check("check_poll_votes_count", "votes_count >=  0"),
        typeorm_1.Check("check_poll_responses_count", "responses_count >=  0"),
        typeorm_1.Check("check_poll_comments_count", "comments_count >=  0"),
        typeorm_1.Check("check_visible_options_count", "visible_options_count is null or visible_options_count >= 0")
    ], Poll);
    return Poll;
}());
exports.Poll = Poll;
//# sourceMappingURL=poll.entity.js.map