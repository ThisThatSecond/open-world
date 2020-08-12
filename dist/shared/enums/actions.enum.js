"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PairVoteActions;
(function (PairVoteActions) {
    PairVoteActions[PairVoteActions["THIS"] = 0] = "THIS";
    PairVoteActions[PairVoteActions["THAT"] = 1] = "THAT";
    PairVoteActions[PairVoteActions["REMOVED"] = 2] = "REMOVED";
    PairVoteActions[PairVoteActions["SKIP"] = 3] = "SKIP";
})(PairVoteActions = exports.PairVoteActions || (exports.PairVoteActions = {}));
var CommentVoteActions;
(function (CommentVoteActions) {
    CommentVoteActions[CommentVoteActions["UP"] = 0] = "UP";
    CommentVoteActions[CommentVoteActions["DOWN"] = 1] = "DOWN";
    CommentVoteActions[CommentVoteActions["REMOVED"] = 2] = "REMOVED";
})(CommentVoteActions = exports.CommentVoteActions || (exports.CommentVoteActions = {}));
var OptionVoteActions;
(function (OptionVoteActions) {
    OptionVoteActions[OptionVoteActions["UP"] = 0] = "UP";
    OptionVoteActions[OptionVoteActions["DOWN"] = 1] = "DOWN";
    OptionVoteActions[OptionVoteActions["REMOVED"] = 2] = "REMOVED";
})(OptionVoteActions = exports.OptionVoteActions || (exports.OptionVoteActions = {}));
var PollProfileActions;
(function (PollProfileActions) {
    PollProfileActions[PollProfileActions["SKIP"] = 0] = "SKIP";
})(PollProfileActions = exports.PollProfileActions || (exports.PollProfileActions = {}));
//# sourceMappingURL=actions.enum.js.map