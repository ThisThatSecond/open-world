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
var survey_entity_1 = require("./survey.entity");
var Collection = /** @class */ (function () {
    function Collection() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", String)
    ], Collection.prototype, "collection_id", void 0);
    __decorate([
        typeorm_1.Index() // is it needed?
        ,
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Collection.prototype, "title", void 0);
    __decorate([
        typeorm_1.Index(),
        typeorm_1.OneToOne(function () { return survey_entity_1.Survey; }, function (survey) { return survey.collection; }, {
            nullable: false,
        }),
        typeorm_1.JoinColumn({
            name: "survey_id",
        }),
        __metadata("design:type", survey_entity_1.Survey)
    ], Collection.prototype, "survey", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return poll_entity_1.Poll; }, function (poll) { return poll.collection; }),
        __metadata("design:type", Array)
    ], Collection.prototype, "polls", void 0);
    Collection = __decorate([
        typeorm_1.Entity("collections")
    ], Collection);
    return Collection;
}());
exports.Collection = Collection;
//# sourceMappingURL=collection.entity.js.map